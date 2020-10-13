import json
from django.http import (
    HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
)
from django.contrib.auth.hashers import check_password, make_password
from http import HTTPStatus
from CuratedLists.models import Author
from CuratedLists.models import Curation
from django.core import serializers

MAX_AGE = 30*24*60*60  # 30 days


def index(request):
    return HttpResponse("Hello, world.")


def signin(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            credentials = json.loads(request.body.decode('utf-8'))
            if validate(credentials['username'], credentials['password']):
                author = json.loads(serializers.serialize(
                    'json', Author.objects.filter(username=credentials['username'])
                ))
                curations = json.loads(serializers.serialize(
                    'json', Curation.objects.filter(
                        author=Author.objects.get(username=credentials['username'])
                        )
                ))
                author[0]["curations"] = curations
                response = HttpResponse(
                    status=HTTPStatus.OK, content=json.dumps(author),
                    content_type='application/json; charset=utf-8'
                )
                response.set_signed_cookie('uid', credentials['username'], max_age=MAX_AGE)
                response.set_signed_cookie(
                    'loggedin', 'true', salt=credentials['username'], max_age=MAX_AGE
                )
            else:
                response = HttpResponse(status=HTTPStatus.UNAUTHORIZED)
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def signup(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            details = json.loads(request.body.decode('utf-8'))
            if usernameExists(details['username']):
                response = HttpResponseBadRequest(
                    content='{"error": "Username already exists."}',
                    content_type='application/json; charset=utf-8')
            else:
                Author.objects.create(
                    username=details['username'],
                    password=make_password(details['password']),
                    name=details['name'],
                    company=details['company'])
                response = HttpResponse(status=HTTPStatus.CREATED)
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def get_profile(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            payload = json.loads(request.body.decode('utf-8'))
            if not usernameExists(payload['username']):
                response = HttpResponseBadRequest(
                    content='{"error": "Username does not exist."}',
                    content_type='application/json; charset=utf-8')
            else:
                author = json.loads(serializers.serialize(
                    'json', Author.objects.filter(username=payload['username'])
                ))
                curations = json.loads(serializers.serialize(
                    'json', Curation.objects.filter(
                        author=Author.objects.get(username=payload['username'])
                        )
                ))
                author[0]["curations"] = curations
                response = HttpResponse(
                    status=HTTPStatus.OK, content=json.dumps(author),
                    content_type='application/json; charset=utf-8'
                )
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def get_topic(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            payload = json.loads(request.body.decode('utf-8'))
            curations = json.loads(serializers.serialize(
                'json', Curation.objects.filter(topic__icontains=payload['topic'])
            ))
            for curation in curations:
                curation['fields']['profile'] = json.loads(serializers.serialize(
                    'json', Author.objects.filter(
                        id=curation['fields']['author']
                    )
                ))[0]["fields"]
            response = HttpResponse(
                status=HTTPStatus.OK,
                content=json.dumps(curations),
                content_type='application/json; charset=utf-8'
            )
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def all_curations(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'GET':
        response = HttpResponseNotAllowed(['GET'])
    else:
        try:
            curations = json.loads(serializers.serialize('json', Curation.objects.all()))
            for curation in curations:
                curation['fields']['profile'] = json.loads(serializers.serialize(
                    'json', Author.objects.filter(
                        id=curation['fields']['author'])
                    )
                )[0]["fields"]
            response = HttpResponse(
                status=HTTPStatus.OK,
                content=json.dumps(curations),
                content_type='application/json; charset=utf-8'
            )
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def all_mentors(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'GET':
        response = HttpResponseNotAllowed(['GET'])
    else:
        try:
            mentors = Author.objects.all()
            response = HttpResponse(
                status=HTTPStatus.OK,
                content=serializers.serialize("json", mentors),
                content_type='application/json; charset=utf-8'
            )
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def add_curation(request):
    if request.method == 'OPTIONS':
        return HttpResponse()
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            if validate_session(request):
                curation = json.loads(request.body.decode('utf-8'))
                Curation.objects.create(
                    author=Author.objects.get(username=curation['username']),
                    topic=curation['topic'],
                    data=curation['data']
                )
                response = HttpResponse(status=HTTPStatus.CREATED)
            else:
                response = HttpResponse(status=HTTPStatus.FORBIDDEN)
        except Exception as e:
            print(e)
            response = HttpResponseBadRequest()
    return response


def validate_session(request):
    try:
        uid = request.get_signed_cookie('uid', max_age=MAX_AGE)
        return request.get_signed_cookie('loggedin', salt=uid, max_age=MAX_AGE) == 'true'
    except Exception:
        return True


def validate(uid, password):
    if usernameExists(uid) and check_password(password, Author.objects.get(username=uid).password):
        return True
    else:
        return False


def usernameExists(uid):
    return Author.objects.filter(username=uid).exists()

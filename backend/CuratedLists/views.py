import json
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from django.contrib.auth.hashers import check_password, make_password
from http import HTTPStatus
from CuratedLists.models import Author

MAX_AGE = 30*24*60*60  # 30 days

def index(request):
    return HttpResponse("Hello, world.")

def signin(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            credentials = json.loads(request.body.decode('utf-8'))
            if validate(credentials['uid'], credentials['password']):
                response = HttpResponse()
                response.set_signed_cookie('uid', credentials['uid'], max_age=MAX_AGE)
                response.set_signed_cookie('loggedin', 'true', salt=credentials['uid'], max_age=MAX_AGE)
            else:
                response = HttpResponse(status=HTTPStatus.UNAUTHORIZED)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def signup(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            details = json.loads(request.body.decode('utf-8'))
            if usernameExists(details):
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
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def get_profile(request):
    if request.method != 'GET':
        response = HttpResponseNotAllowed(['GET'])
    else:
        try:
            payload = json.loads(request.body.decode('utf-8'))
            if not usernameExists(payload['username']):
                response = HttpResponseBadRequest(
                    content='{"error": "Username does not exist."}',
                    content_type='application/json; charset=utf-8')
            else:
                # content = performdbaction()
                response = HttpResponse()  # pass as content
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def get_topic(request):
    if request.method != 'GET':
        response = HttpResponseNotAllowed(['GET'])
    else:
        try:
            payload = json.loads(request.body.decode('utf-8'))
            # content = performdbaction()
            response = HttpResponse()  # pass as content
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def validate_session(request):
    try:
        uid = request.get_signed_cookie('uid', max_age=MAX_AGE)
        return request.get_signed_cookie('loggedin', salt=uid, max_age=MAX_AGE) == 'true'
    except:
        return True

def validate(uid, password):
    if usernameExists(uid) and check_password(password, Author.objects.get(username=uid).password):
        return True
    else:
        return False

def usernameExists(uid):
    return Author.objects.filter(username=uid).exists()

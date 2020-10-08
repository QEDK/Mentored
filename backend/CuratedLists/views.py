import json
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from http import HTTPStatus

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
            if not new_username(details):
                response = HttpResponseBadRequest(
                    content='{"error": "Username already exists."}',
                    content_type='application/json; charset=utf-8')
            else:
                # perform db action
                response = HttpResponse(status=HTTPStatus.CREATED)
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
    if not new_uid(uid) and password == 'password':
        return True
    else:
        return False

def new_username(uid):
    if uid == 'admin':  # check username in database
        return False
    else:
        return True

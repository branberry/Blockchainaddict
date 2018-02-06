from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
import json
# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the crypto index.")

def getUsers(request, u_id):
    return HttpResponse("hi")

def getUserValues(request, u_id):
    return HttpResponse("hi")

# Function to handle user login.
#@ensure_csrf_cookie
@csrf_exempt
def submitLogin(request):
    post_data = request.body.decode()
    data = json.loads(post_data)
    print(data['email'])
    return HttpResponse("logged in")
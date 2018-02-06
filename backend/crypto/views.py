from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from .models import User
from .Predict import Predict
from .Fetchdata import Fetchdata
import json
# Create your views here.
def index(request):
    p = Predict()
    data = Fetchdata()
    data.requestData()
    print(p.readData("heh"))
    return HttpResponse("Hello, world. You're at the crypto index.")

def getUsers(request, u_id):
    return HttpResponse("hi")

def getUserValues(request, u_id):
    return HttpResponse("hi")

# Function to handle user login.
#@ensure_csrf_cookie
@csrf_exempt
def submitLogin(request):
    # Parses response data from byte string to a string
    post_data = request.body.decode()
    
    # parses json string to dictionary
    data = json.loads(post_data)

    # getting the user tuple from the database
    u = User.objects.filter(email=data['email'])
    print(u)
    return HttpResponse("logged in")


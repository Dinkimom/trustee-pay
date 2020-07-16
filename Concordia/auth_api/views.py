from django.shortcuts import HttpResponse
from django.http import StreamingHttpResponse
# Create your views here.
"""
def index(request):
    return HttpResponse("Hello World!")
def step(request):
    return HttpResponse("Next step")
"""

import pyrebase
import json
from django import forms

config = {
    "apiKey": "AIzaSyCMDYOHQScDJk6fjuO34E_U-O-e_BIN8wA",
    "authDomain": "devapp-499c9.firebaseapp.com",
    "databaseURL": "https://devapp-499c9.firebaseio.com",
    "projectId": "devapp-499c9",
    "storageBucket": "devapp-499c9.appspot.com",
    "messagingSenderId": "840839891461",
    "appId": "1:840839891461:web:1be1a5ee410f7c17f92a6c",
    "measurementId": "G-SCC44BDT51"
}
firebase = pyrebase.initialize_app(config)

class User(forms.Form):
    login = forms.CharField(label=u'Login',max_length=25)
    password = forms.CharField(label=u'Password',max_length=15)

# create new user
def createuser(request):
    auth = firebase.auth()

    json_string = request.GET.get('json_data')
    form_data = json.loads(json_string)[0]
    f = User(form_data)
    if f.is_valid():
        login = f.cleaned_data['login']
        password = f.cleaned_data['password']
        new_user = auth.create_user_with_email_and_password(login,password)

    return HttpResponse("Create")

# sign-in
def sign_in(request):
    auth = firebase.auth();
    json_string = request.POST.get('json_data')
    form_data = json.loads(json_string)[0]
    f = User(form_data)
    if f.is_valid():
        login = f.cleaned_data['login']
        password = f.cleaned_data['password']
        old_user = auth.sign_in_with_email_and_password(login,password)


    return HttpResponse("Sign-in")

def reset_pass(request):
    auth = firebase.auth()
    json_string = request.POST.get('json_data')
    form_data = json.loads(json_string)[0]
    f = User(form_data)
    if f.is_valid():
        login = f.cleaned_data['login']
        auth.send_password_reset_email(login)

    return HttpResponse("Reset")

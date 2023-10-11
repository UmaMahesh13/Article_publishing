from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate as auth
from django.contrib.auth import get_user_model

def home(request):
    posts=["This is "+str(i)+" post" for i in range(1,11)]
    return render(request,"home.html",{"posts":posts})

def login(request):
    return render(request,"login.html")

def signin(request):
    return render(request,"signin.html",{'userexists':False})

def authenticate(request):
    if request.method=='POST':
        name=request.POST.get('Username')
        password=request.POST.get('Password')
        print(request.POST.get('Username'))
        print(request.POST.get('Password'))
        A=auth(username=name,password=password)
        if A is not None:
            return HttpResponse("<h1>You are authenticated<h1>")
        else:
            return HttpResponse("<h1>You are not authenticated<h1>")

def register(request):
    if request.method=='POST':
        name=request.POST.get('Username')
        password=request.POST.get('Password')
        users=get_user_model()
        try:
            A=users.objects.create_user(username=name,password=password)
            A.save()
            return HttpResponse("<h1>You have successfully registered<h1>")
        except:
            return render(request,"signin.html",{'userexists':True})
    else:
        return redirect('signin')
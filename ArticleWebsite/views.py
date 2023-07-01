from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    posts=["This is "+str(i)+" post" for i in range(1,11)]
    return render(request,"home.html",{"posts":posts})
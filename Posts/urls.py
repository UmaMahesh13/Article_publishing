from django.contrib import admin
from django.urls import path,include
from . import views


urlpatterns=[
    path('edit',views.edit,name="post_edit"),
    path('auto-save',views.auto_save_post,name="auto_save")
]
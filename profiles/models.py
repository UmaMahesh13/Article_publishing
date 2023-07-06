from django.db import models
from django.contrib.auth.models import AbstractUser
from Posts.models import Post

class User(AbstractUser):
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    Userliked_posts = models.ManyToManyField(Post, related_name='likes', blank=True)
    # Add any additional fields you require for user profiles


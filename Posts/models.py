from django.db import models
from django.conf import settings


class Post(models.Model):
    author=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    post_likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_posts')# post inplace 
    #of arcticles but some error in name clashes
    total_likes = models.IntegerField(default=0)


class Section(models.Model):
    SECTION_TYPES = (
        ('text', 'Text'),
        ('image', 'Image'),
        ('quote', 'Quote'),
        ('embed', 'Embed'),
    )

    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='sections')
    section_type = models.CharField(max_length=10, choices=SECTION_TYPES)
    content_or_path = models.TextField()

    # Additional fields as per specific section types, e.g., image URL, embedded link, etc.
    # You can customize this based on your requirements.

    order = models.PositiveIntegerField()

    class Meta:
        ordering = ['order']

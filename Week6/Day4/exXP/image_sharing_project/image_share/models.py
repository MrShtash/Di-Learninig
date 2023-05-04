from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.

class Image(models.Model):
    image_file = models.URLField(null=True, blank=True)
    title = models.CharField(max_length=50, blank=False, db_index=True)
    description = models.CharField(max_length=50, blank=False, db_index=True)
    created_date = models.DateField(auto_now_add=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

# class Profile(models.Model):

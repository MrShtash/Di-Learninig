from django.db import models
from django.contrib.auth.models import User
import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver

class Image(models.Model):
    image_file = models.ImageField(upload_to='media/')
    title = models.CharField(max_length=100, blank=False, db_index=True)
    description = models.TextField(max_length=100, blank=False, db_index=True)
    created_date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title} {self.description} {self.user}'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sum_img = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user} {self.sum_img}'
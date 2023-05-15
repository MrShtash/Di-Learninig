from django.db import models
import datetime
# from django.contrib.auth import get_user_model
# User = get_user_model()

class Message(models.Model):
    text = models.CharField(max_length=500, blank=False, null=True, db_index=True)
    author = models.CharField(max_length=100, blank=False, null=True, db_index=True)
    created = models.DateTimeField(null = True, blank=True)

    def __str__(self):
        return f'{self.text}, {self.author}, {self.created}'
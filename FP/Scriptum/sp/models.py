from django.db import models
import datetime
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Login (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.name}, {self.password}'

class Company (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.name}'

class Project (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}, {self.company}'
    
class Grade (models.Model):
    grade_type = models.CharField(max_length=100, blank=True, null=True)
    cost = models.DecimalField(max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f'{self.grade_type}, {self.cost}'

class Hour (models.Model):
    hour = models.IntegerField(default=0)
    grade_type = models.ForeignKey(Grade, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.hour}, {self.grade_type}'
    
class templateWork (models.Model):
    task = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f'{self.task}'

class Cash (models.Model):
    cash =  models.DecimalField(max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f'{self.cash}'

class Work (models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    details = models.CharField(max_length=1000, blank=True, null=True)
    hour = models.IntegerField(default=0)
    specialist = models.ForeignKey(User, on_delete=models.CASCADE)
    date_creation = models.DateField(auto_now_add = True)
    date_completion = models.DateField(blank = True, null = True)
    deadline_date = models.DateField(blank = True)

    def __str__(self):
        return f'{self.task}, {self.hour}, {self.specialist}'

    


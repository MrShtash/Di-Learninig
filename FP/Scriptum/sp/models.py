from django.db import models

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
    specialist_username = models.CharField(max_length=100, blank=True, null=True)
    grade_type = models.IntegerField()
    cost = models.IntegerField

    def __str__(self):
        return f'{self.specialist_username}, {self.grade_type}, {self.cost}'

class Hour (models.Model):
    hour = models.IntegerField()
    grade_type = models.ForeignKey(Grade, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.hour}, {self.grade_type}'
    
class templateWork (models.Model):
    task = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f'{self.task}'

class Cash (models.Model):
    cash = models.IntegerField()



    


from django.db import models
# from django.contrib.auth.models import User

# Create your models here.

class Department(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=100, blank=True)
    def __str__(self):
        return f'{self.name}, {self.description}'

class Employee(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True) # Many-to-one with Department model: Each employee belongs to one department.
    project = models.ManyToManyField('Project') # Many-to-many with Project model: An employee can be assigned to multiple projects, and a project can have multiple employees working on it.
    # department_admin = models.BooleanField(default=True)
    def __str__(self):
        return f'{self.name}, {self.email}, {self.phone_number}, {self.department}, {self.project}'

class Task(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=100, blank=True)
    due_date = models.DateField(blank=True)
    completed = models.BooleanField()
    project = models.ForeignKey('Project', on_delete=models.SET_NULL, null=True) # One-to-one with Project model: Each task is associated with one project, and a project can have multiple tasks.
    def __str__(self):
        return f'{self.name}, {self.description}, {self.due_date}, {self.completed}, {self.project}'

class Project(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=100, blank=True)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    def __str__(self):
        return f'{self.name}, {self.description}, {self.start_date}, {self.end_date}'
from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 50)
    image = models.URLField(blank = True, null = True)
    del_flag = models.BooleanField(default = False)

    def __str__(self):
        return f"{self.name}"

class Todo(models.Model):
    title = models.CharField(max_length = 50)
    details = models.CharField(max_length = 150)
    has_been_done = models.BooleanField(default = False)
    date_creation = models.DateField(auto_now_add = True)
    date_completion = models.DateField(blank = True, null = True)
    deadline_date = models.DateField(blank = True)
    category = models.ForeignKey('Category', on_delete = models.PROTECT, null = True)
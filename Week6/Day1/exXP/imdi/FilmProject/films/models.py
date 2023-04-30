from django.db import models
import datetime

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__(self):
        return f'{self.name}'

class Category(models.Model):
    name = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__(self):
        return f'{self.name}'

class Film(models.Model):
    title = models.CharField(max_length=50, blank=False, db_index=True)
    release_date = models.DateField(blank=False, auto_now_add=True)
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE)
    available_in_countries = models.ManyToManyField(Country, on_delete=models.DO_NOTHING)
    category = models.ManyToManyField(Category, on_delete=models.DO_NOTHING)
    director = models.ManyToManyField('Director', on_delete=models.DO_NOTHING)
    def __str__(self):
        return f'{self.title} {self.release_date} {self.created_in_country} {self.available_in_countries} {self.category} {self.director}'

class Director(models.Model):
    first_name = models.CharField(max_length=50, blank=False, db_index=True)
    last_name = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
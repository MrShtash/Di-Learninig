from django.db import models
import datetime
# from forms import User 
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
User = get_user_model()

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
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='films_created')
    available_in_countries = models.ManyToManyField(Country, related_name='films_available')
    category = models.ManyToManyField(Category)
    director = models.ManyToManyField('Director')
    def __str__(self):
        return f'{self.title}, {self.release_date}, {self.created_in_country}'

class Director(models.Model):
    first_name = models.CharField(max_length=50, blank=False, db_index=True)
    last_name = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Comment(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    def __str__(self):
        return f'comment by {self.author.username} about {self.film.title}'
    
class Rating(models.Model):
    CHOICES = (
        (1, '⭐'),
        (2, '⭐⭐'),
        (3, '⭐⭐⭐'),
        (4, '⭐⭐⭐⭐'),
        (5, '⭐⭐⭐⭐⭐')
    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='ratings')
    rating = models.IntegerField(choices=CHOICES, default=1)

    def __str__(self):
        return f"{self.user}, {self.film.title}, {self.rating}"
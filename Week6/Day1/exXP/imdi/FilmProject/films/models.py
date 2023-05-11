from django.db import models
import datetime
# from forms import User 
# from django.contrib.auth.models import User
# from django.contrib.auth import get_user_model
# User = get_user_model()
# CustomUser = get_user_model()
from django.contrib.auth.models import (AbstractBaseUser,
                                        BaseUserManager
                                        )
from django.contrib.auth.models import PermissionsMixin

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

# class Comment(models.Model):
#     film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='comments')
#     # author = models.ForeignKey('User', on_delete=models.CASCADE)
#     author = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
#     content = models.TextField()
#     def __str__(self):
#         return f'comment by {self.author.username} about {self.film.title}'
    
# class Rating(models.Model):
#     CHOICES = (
#         (1, '⭐'),
#         (2, '⭐⭐'),
#         (3, '⭐⭐⭐'),
#         (4, '⭐⭐⭐⭐'),
#         (5, '⭐⭐⭐⭐⭐')
#     )

#     # user = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)
#     user = models.ForeignKey('CustomUser', on_delete=models.SET_NULL, null=True)
#     film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='ratings')
#     rating = models.IntegerField(choices=CHOICES, default=1)

#     def __str__(self):
#         return f"{self.user}, {self.film.title}, {self.rating}"

class UserManager(BaseUserManager): # manager that define user and superuser methods
# clean UserManager (del username)
    def create_user(self, email, password, **extra_fields): # create and save a new user with the given email and password
        if not email:
            raise ValueError('add your EMAIL now! :) ')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields): # creates and save a superuser with the given email and password
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50, blank=True) # standard fields of AbstractBaseUser
    last_name = models.CharField(max_length=50, blank=True) # standard fields of AbstractBaseUser
    date_joined = models.DateTimeField(auto_now_add=True) # standard fields of AbstractBaseUser
    is_active = models.BooleanField(default=True) # standard fields of AbstractBaseUser
    is_staff = models.BooleanField(default=False) # standard fields of AbstractBaseUser

    USERNAME_FIELD = 'email' # unique id, needs for authenticate
    REQUIRED_FIELDS = ['first_name', 'last_name'] # field when superuser create

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_full_name(self): # optional attr
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self): # optional attr
        return self.first_name

class Comment(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='author')
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
    # user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name = 'user')
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='ratings')
    rating = models.IntegerField(choices=CHOICES, default=1)

    def __str__(self):
        return f"{self.user}, {self.film.title}, {self.rating}"
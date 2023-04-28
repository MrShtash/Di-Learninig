from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    address = models.CharField(max_length=100)

    # for str meth output
    def __str__(self):
        return f'{self.name} | {self.phone_number} | {self.address} | {self.email}'  

# ==== extra (trying new topic) ====
# one-2-one relationship - Profile (parent name, country of origin, language)
class Profile(models.Model):
    person = models.OneToOneField('Person', on_delete=models.CASCADE)
    country_origin = models.CharField(max_length=50)
    Language = models.ManyToManyField('Language')
    def __str__(self):
        return f'{self.country_origin}'

# many-2-many relationship - language (name)
class Language(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return f'{self.name}'
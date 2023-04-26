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
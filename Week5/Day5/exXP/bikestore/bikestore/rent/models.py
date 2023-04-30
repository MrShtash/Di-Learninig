from django.db import models
# from phonenumber_field.modelfields import PhoneNumberField
import datetime

# Create your models here.

class Customer(models.Model):
    first_name = models.CharField(max_length=50, blank=False, db_index=True)
    last_name = models.CharField(max_length=50, blank=False, db_index=True)
    email = models.EmailField()
    # phone_number = models.PhoneNumberField()
    phone_number = models.CharField(max_length=50, blank=False, db_index=True)
    address = models.CharField(max_length=50, blank=False, db_index=True)
    city = models.CharField(max_length=50, blank=False, db_index=True)
    country = models.CharField(max_length=50, blank=False, db_index=True)

    def __str__(self):
        return f'{self.id} {self.first_name} {self.last_name}'
    
class Vehicle(models.Model):
    vehicle_type = models.ForeignKey('VehicleType', on_delete=models.DO_NOTHING)
    date_created = models.DateField(blank=True, default=datetime.date.today())
    real_cost = models.FloatField(blank=False)
    size = models.ForeignKey('VehicleSize', on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.vehicle_type} {self.real_cost} {self.size}'

class VehicleType(models.Model):
    name = models.CharField(max_length=50, blank=False, db_index=True)

    def __str__(self):
        return f'{self.name}'    

class VehicleSize(models.Model):
    name = models.CharField(max_length=50, blank=False, db_index=True)

    def __str__(self):
        return f'{self.name}'

class Rental(models.Model):
    rental_date = models.DateField(blank=True)
    return_date = models.DateField(null=True)
    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.rental_date} {self.return_date} {self.customer} {self.vehicle}'

class RentalRate(models.Model):
    daily_rate = models.FloatField(blank=False)
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.DO_NOTHING)
    vehicle_size = models.ForeignKey(VehicleSize, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.daily_rate} {self.vehicle_type} {self.vehicle_size}'
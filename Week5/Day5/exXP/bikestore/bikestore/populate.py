import os
import django
from faker import Faker
import datetime
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bikestore.settings')
django.setup()

from rent.models import *

fake = Faker()

def fake_customer():
    first_name = fake.first_name()
    last_name = fake.last_name()
    email = fake.email()
    phone_number = fake.phone_number()
    address = fake.address()
    city = fake.city()
    country = fake.country()

    fake_customer = Customer(first_name = first_name,
                            last_name = last_name,
                            email = email,
                            phone_number = phone_number,
                            address = address, 
                            city = city, 
                            country = country)
    fake_customer.save()

# for _ in range(10):
#     fake_customer()

vehicle_list = Vehicle.objects.all()
customer_list = Customer.objects.all()

# def fake_rental():
#     rental_date = fake.rental_date()
#     return_date = fake.return_date()
#     customer = fake.customer()
#     vehicle = fake.vehicle()

#     fake_rental = Rental(rental_date = rental_date,
#                         return_date = return_date,
#                         customer = customer,
#                         vehicle = vehicle)
#     fake_rental.save()

for _ in range(100): #create loop with variable
    l = {} #create empty dict with 1 key (random date 1-10.04) - value (random date between 1-10 days after control date)
    fake_date = fake.date_between_dates(date_start=datetime.datetime(2022,4,1), date_end=datetime.datetime(2023,5,15))
    fake_date_2 = fake_date + datetime.timedelta(days = random.randint(1, 10))
    day = datetime.datetime(2023,4,28)
    if fake_date_2 > day.date(): # if date > 28.04 -> None
        fake_date_2 = None
    l[fake_date] = fake_date_2
        
    for k,v in l.items(): # for key and value in dict
        customer_1 = random.choice(customer_list) # random customer from DB
        vehicle_1 = random.choice(vehicle_list) # random vehicle from DB

    new_rental = Rental(rental_date = fake_date,
                        return_date = fake_date_2,
                        customer = customer_1,
                        vehicle = vehicle_1,
                        )
    # print(new_rental)

    new_rental.save()

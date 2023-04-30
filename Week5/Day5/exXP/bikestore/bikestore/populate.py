import os
import django
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bikestore.settings')
django.setup()

from rent.models import Customer

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

# for _ in range(5):
#     fake_customer() 
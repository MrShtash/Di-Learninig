import os
# import sys
import django
# import datetime
import requests
# from book_review.models import Book
import json

response = requests.get('https://AIzaSyBI6uRg9t3UEhGqjWQlmtz08C7aHNi6-Q8')

if response.status_code == 200:
    data = response.json()
else:
    print('Error:', response.status_code)
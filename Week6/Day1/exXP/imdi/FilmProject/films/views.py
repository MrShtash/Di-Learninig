from django.shortcuts import render
from .models import *

# Create your views here.
# menu =   [{'title': "Home", 'url_name': 'home_path'},
#           {'title': "Rentals", 'url_name': 'rentals_list_path'},
# ]

def home(request):
    context={'title':'Home page'}
    return render(request, '/homepage.html', context)

# Create the views : addFilm and addDirector


from django.shortcuts import render
from django.views import generic
from django.urls import reverse_lazy
from .models import *
from .forms import *

def home(request):
    my_queryset = Film.objects.all()
    context={
        'title':'Home page',
        'films': my_queryset,
    }
    return render(request, 'homepage.html', context)

# Create the views : addFilm and addDirector

class FilmCreateView(generic.CreateView):
    template_name = 'film/addfilm.html'
    model = Film
    form_class = FilmForm
    success_url = reverse_lazy("addfilm")

class DirectorCreateView(generic.CreateView):
    template_name = 'director/adddirector.html'
    model = Director
    form_class = DirectorForm
    success_url = reverse_lazy("adddirector")


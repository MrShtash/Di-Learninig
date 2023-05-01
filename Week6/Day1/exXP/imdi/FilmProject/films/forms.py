from django.forms import ModelForm
from django import forms
from .models import *
# Create the forms : AddFilmForm and AddDirectorForm

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film # use model Film
        fields = '__all__'

class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director # use model Dirrector
        fields = '__all__'


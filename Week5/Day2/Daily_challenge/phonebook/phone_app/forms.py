from django import forms
from .models import Person

class SearchForm(forms.ModelForm):

    class Meta:
        model = Person
        fields = ('name', 'phone_number')
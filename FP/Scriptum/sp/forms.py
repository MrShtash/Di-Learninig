from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *

class WorkAddForm(forms.ModelForm):
    class Meta:
        model = Work
        fields = ['title', 'details', 'hour', 'date_completion', 'deadline_date']

class SpecialistProfileForm(forms.ModelForm):
    class Meta:
        model = Specialist
        fields = '__all__'

class CompanyForm (forms.ModelForm):
    class Meta:
        model = Company
        fields = '__all__'

class ProjectFrom (forms.ModelForm):
    class Meta:
        model = Project
        fields = '__all__'
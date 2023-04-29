from django import forms
from .models import Category, Todo

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo # specify class
        fields = ('title', 'details', 'deadline_date', 'category')
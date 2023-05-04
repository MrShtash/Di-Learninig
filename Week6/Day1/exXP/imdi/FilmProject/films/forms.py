from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Director, Film, Comment, Rating
from django.contrib.auth import get_user_model
User = get_user_model()
# from .models import UserProfile

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film # use model Film
        fields = '__all__'

class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director # use model Dirrector
        fields = '__all__'

class CustomSingUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']
        widgets = {
            'content': forms.Textarea()
        }

class RatingForm(forms.ModelForm):
    class Meta:
        model = Rating
        fields = ['rating']
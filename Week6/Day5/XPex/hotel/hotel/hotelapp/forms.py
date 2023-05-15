from django import forms
# from os import name
from datetime import date, timedelta
from datetime import datetime
from .models import (
                    Type,
                    Size,
                    Room,
                    Review,
                    Booking,
                    ApartmentPhoto
                    )

class ReserveForm(forms.Form):
    name = forms.CharField(max_length=500)
    email = forms.EmailField(max_length=500)

class LookApartmentForm(forms.ModelForm):
    date_from = forms.DateField(initial=date.today(),
                            widget=forms.DateInput(attrs={'type': 'date'}))
    date_to = forms.DateField(initial=date.today()+timedelta(days=5),
                            widget=forms.DateInput(attrs={'type': 'date'}))
    type = forms.ModelChoiceField (queryset=Type.objects.all())
    size = forms.ModelChoiceField(queryset=Size.objects.all())
    animals_allowed = forms.BooleanField(default=False)
    # price = forms.IntegerField()

    class Meta:
        model = Room
        fields = '__all__'

class CommentForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = '__all__'
        widgets = {
            'text': forms.Textarea()
        }

class ImageForm(forms.ModelForm):
    class Meta:
        model = ApartmentPhoto
        fields = '__all__'

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = '__all__'
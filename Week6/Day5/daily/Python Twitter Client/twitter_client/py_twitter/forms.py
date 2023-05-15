from django import forms

class MessageForm(forms.Form):
    api_key = forms.CharField(max_length=500)
    api_secret = forms.CharField(max_length=500)
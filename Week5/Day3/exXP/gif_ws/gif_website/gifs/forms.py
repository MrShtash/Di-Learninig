from django import forms
from .models import Category, Gif

class GifForm(forms.ModelForm):
    class Meta:
        model = Gif # specify class
        fields = ('title', 'url', 'uploader_name')
        exclude = ('likes',)
        widgets = {
            'title': forms.Textarea(attrs={'class':'title-class', 'id': '1'})
        }

    categories = forms.ModelMultipleChoiceField(queryset=Category.objects.all())

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'
        widgets = {
            'name': forms.Textarea(attrs={'class':'my_textarea'}) # class 4 styiling with some CSS/JS in HTML
        }

class LikeForm(forms.Form): # form have values, gif value - model, like - boolean
    gif = forms.ModelChoiceField(queryset=Gif.objects.all(), widget=forms.HiddenInput()) # specific models
    # like = forms.IntegerField()
    # dislike = forms.IntegerField()
    like = forms.BooleanField(required=False, widget=forms.HiddenInput())
    # dislike = forms.BooleanField()
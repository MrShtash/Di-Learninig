from django.contrib import admin
from django.urls import path
from films.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('films/homepage/', home),
    path('films/add-film/', FilmCreateView.as_view(), name='addfilm'),
    path('films/add-director/', DirectorCreateView.as_view(), name='adddirector'),
]

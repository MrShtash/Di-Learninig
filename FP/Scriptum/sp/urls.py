from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('scriptum/admin/', admin.site.urls),
    path('scriptum/login/', LogInView.as_view(), name ='login'),
    path('test/',test, name = 'test'),
    
]
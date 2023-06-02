from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('scriptum/admin/', admin.site.urls),
    path('scriptum/login/', LogInView.as_view(), name ='login'),
    path('scriptum/signup/', signup, name = 'signup'),
    path('scriptum/profile/', manager_profile_view, name='manager_profile'),
    path('company/<int:id>/', company_page_view, name='company'),
    path('project/<int:id>/', project_page_view, name='project'),
]
from django.contrib import admin
from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('scriptum/admin/', admin.site.urls),
    path('scriptum/login/', LogInView.as_view(), name ='login'),
    # path('scriptum/signup/', signup, name = 'signup'),
    path('scriptum/profile/', manager_profile_view, name='specialist'),
    path('scriptum/company/<int:company_id>/', company_view, name='company'),
    path('scriptum/project/<int:project_id>/', project_view, name='project'),
    # path('scriptum/project/<int:project_id>/add_work', add_work, name='add_work'),
    path('accounts/login/', login_auth, name = 'login_auth'),
    path('scriptum/logout/', auth_views.LogoutView.as_view(next_page='login_auth'), name='logout'),
]
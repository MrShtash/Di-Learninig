from django.contrib import admin
from django.urls import path
from films.views import home, FilmCreateView, DirectorCreateView, SignUpView, ProfileView
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('films/homepage/', home),
    path('films/add-film/', FilmCreateView.as_view(), name='addfilm'),
    path('films/add-director/', DirectorCreateView.as_view(), name='adddirector'),
    path('films/signup/', SignUpView.as_view(), name='signup'),
    path('films/login/',  LoginView.as_view(template_name='login.html'), name='login'),
    path('films/logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('films/profile/<int:pk>', ProfileView.as_view(), name='profile')
]

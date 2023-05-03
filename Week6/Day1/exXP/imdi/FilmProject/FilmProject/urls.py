from django.contrib import admin
from django.urls import path
from films.views import (home,
                        FilmCreateView,
                        DirectorCreateView,
                        SignUpView,
                        ProfileView,
                        FilmDeleteView,
                        sfd,
                        sdd,
                        director,
                        DirectorDeleteView,
                        CommentCreateView)
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('films/homepage/', home, name='home'),
    path('films/director/directors/', director, name='director'),
    path('films/add-film/', FilmCreateView.as_view(), name='addfilm'),
    path('films/add-director/', DirectorCreateView.as_view(), name='adddirector'),
    path('films/signup/', SignUpView.as_view(), name='signup'),
    path('films/login/',  LoginView.as_view(template_name='login.html'), name='login'),
    path('films/logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('films/profile/', ProfileView.as_view(), name='profile'),
    path('films/homepage/filmdelete/<int:pk>/', FilmDeleteView.as_view(template_name = 'film/film_delete.html'), name='film-delete'),
    path('films/sfd/', sfd, name='sfd'),
    path('films/director/directordel/<int:pk>/', DirectorDeleteView.as_view(template_name = 'director/director_del.html'), name='director-delete'),
    path('director/sfd/', sdd, name='sdd'),
    path('films/homepage/comment/<int:pk>', CommentCreateView.as_view(template_name = 'film/homepage.html'), name='comment')
]
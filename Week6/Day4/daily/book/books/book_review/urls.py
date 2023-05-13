from django.contrib import admin
from django.urls import path, include
from .views import (
                    RegisterUser,
                    LoginUser,
                    logout_user,
                    search_books,
                    # BookList,
                    ViewComments,
                    AddComments
                    )

urlpatterns = [
    # path('home/', BookList.as_view(), name = 'homepage'),
    path('home/', search_books, name = 'homepage_path'),
    path('register/', RegisterUser.as_view(), name = 'register'),
    path('login/', LoginUser.as_view(), name = 'login'),
    path('logout/', logout_user, name = 'logout'),
    path('comments/<int:pk>', ViewComments.as_view(), name = 'comments'),
    path('add_comment/<int:pk>', AddComments.as_view(), name = 'add_comments'),
]
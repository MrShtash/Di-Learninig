from typing import Any, Dict
from django.db.models import Avg, Count
from django.db.models.query import QuerySet
from django.forms.models import BaseModelForm
from django.http import HttpResponse
# from pygments.token import Comment
from .models import Book, BookReview
from django.shortcuts import render, redirect
from django.views.generic import (
                                # DetailView,
                                ListView,
                                CreateView
                                )
from utils import *
from .forms import RegisterUserForm, AddCommentForm
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login

# Create your views here.

class BookList(DataMixin, ListView):
    # model = Book
    # fields = ['title', 'author', 'published_date', 'description', 'page_count', 'thumbnail_url', 'avr_rating']
    # template_name = 'homepage_path.html'

    # def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
    #     context = super().get_context_data(**kwargs)
    #     c_def = self.get_user_context(title = "Books")
    #     context = dict(list(context.items()) + list(c_def.items()))
    #     return context
    pass

def search_books(request):
    if request.method == 'POST':
        print("Post request\n", request.POST)
        search_book = request.POST.get('book_title', False)
        print(search_book)
        search_author = request.POST.get('author_name', False)
        print(search_author)
        book_list = Book.objects.annotate(
            avrg_raiting = Avg('bookreview__rating'),
            count_raiting= Count('bookreview__rating')            
				).order_by('title')
        book_list = book_list.filter(
            author__icontains=search_author) if search_author else book_list
        book_list = book_list.filter(
            title__icontains=search_book) if search_book else book_list
    else:
        book_list = Book.objects.annotate(
                                        avrg_raiting = Avg('bookreview__rating'),
                                        count_raiting= Count('bookreview__rating')            
				                        ).order_by('title')
    title = "Library"
    context = {'menu': menu, 'title': title, 'book_list': book_list}
    return render(request, 'homepage.html', context)

class ViewComments(DataMixin, ListView):
    model = BookReview
    fields = '__all__'
    template_name = 'comments.html'
    
    def get_queryset(self) -> QuerySet[Any]:
        q = super().get_queryset()
        pk = self.kwargs.get('pk')
        q = q.filter(associated_book=pk)
        return q

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        pk = self.kwargs.get('pk')
        book = Book.objects.filter(pk=pk).annotate(
            avrg_raiting = Avg('bookreview__rating'),
            count_raiting= Count('bookreview__rating')
        )
        c_def = self.get_user_context(title="Book comments", book=book[0])
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class AddComments(DataMixin, CreateView):
    model = BookReview
    form_class = AddCommentForm
    template_name = 'add_comment.html'
    success_url = reverse_lazy ('homepage_path')
    
    def form_valid(self, form: BaseModelForm) -> HttpResponse:
         pk = self.kwargs.get('pk')
         b = Book.objects.get(pk=pk)
         new_comment = form.save(commit=False)
         new_comment.book = b
         new_comment.user=self.request.user
         new_comment.save()
         return super().form_valid(form)

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        pk = self.kwargs.get('pk')
        book = Book.objects.filter(pk=pk).annotate(
            avrg_raiting = Avg('bookreview__rating'),
            count_raiting= Count('bookreview__rating')
        )
        c_def = self.get_user_context(title="Register user", book=book[0])
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class RegisterUser (DataMixin, CreateView):
    form_class = RegisterUserForm
    template_name = 'registeruser.html'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Book Details")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class LoginUser(DataMixin, LoginView):
    form_class = AuthenticationForm
    template_name = 'login.html'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="User log in")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

    def get_success_url(self):
        return reverse_lazy('homepage_path')

def logout_user(request):
    logout(request)
    return redirect('homepage_path')
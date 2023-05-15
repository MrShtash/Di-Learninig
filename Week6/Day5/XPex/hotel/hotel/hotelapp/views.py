from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
# from utils import *
from django.contrib.auth import logout, login # func for login / logout users
from django.contrib.auth.forms import AuthenticationForm # built-in authentication form
from django.contrib.auth.views import LoginView #built-in view for login in users
from .forms import (
                    ReserveForm,
                    LookApartmentForm,
                    CommentForm,
                    ImageForm,
                    BookingForm
                    )
from .models import (
                    # Type,
                    # Size,
                    Room,
                    Review,
                    Booking,
                    # ApartmentPhoto
                    )
from datetime import date, timedelta
from django.contrib.auth.decorators import (
                                            login_required, # access only ligged in
                                            user_passes_test
                                            )
from django.utils.decorators import method_decorator # func for using login_reqired to class-based views
# from django.db.models import Q # use for complex queries with multiple queries
# from django.core.exceptions import ObjectDoesNotExist # imports an exception

# Create your views here.

class UserAuthentication(LoginView):
    form_class = AuthenticationForm
    template_name ='login.html'
    success_url = reverse_lazy('homepage')

def logout_user (request):
    logout(request)
    return redirect('homepage')

class RoomListView(ListView):
    model = Room
    template_name = 'rooms.html' # render
    context_object_name = 'rooms' # use in template
    paginate_by = 4

    def get_queryset(self): # return queryset with rooms, that should be displayed
        queryset = super().get_queryset() # call get queryset meth from ListView and returm Room objects
        type_filter = self.request.GET.get('type', None) # get value
        size_filter = self.request.GET.get('size', None)
        animals_allowed_filter = self.request.GET.get('animals_allowed', None) # get value 
        if type_filter:
            queryset = queryset.filter(type__types=type_filter) # check is not None and use where is not None
        if size_filter:
            queryset = queryset.filter(size__sizes=size_filter)
        if animals_allowed_filter:
            queryset = queryset.filter(animals_allowed=True)
        return queryset

class RoomDetailView(DetailView):
    model = Room
    template_name = 'room_detail.html'
    context_object_name = 'room'

    def get_context_data(self, **kwargs): # can give value args
        context = super().get_context_data(**kwargs) # create variable, call parent DetalView method and return context, that updated (commentform) and return result context
        context['comment_form'] = CommentForm() # create new instanse for addcoment form on detailview page 
        context['image_form'] = ImageForm()
        context['booking_form'] = BookingForm(initial={'room': self.object}) #arg initial pass for populate form with id
        return context

@method_decorator(login_required, name='dispatch') # login_required check auth user. If not - redirect to signup page
@method_decorator(user_passes_test(lambda u: u.is_staff), name='dispatch') # check user (if it's staff)
class RoomUpdateView(DetailView):
    model = Room
    template_name = 'room_upd.html'
    context_object_name = 'room'

    def get_context_data(self, **kwargs): # add extra context to template for display view
        context = super().get_context_data(**kwargs) # create new instanse on upd page
        context['image_form'] = ImageForm() # add context to variable (object ImageForm)
        return context

@method_decorator(login_required, name='dispatch')
@method_decorator(user_passes_test(lambda u: u.is_staff), name='dispatch')
class RoomDeleteView(DetailView):
    model = Room
    template_name = 'room_del.html'
    context_object_name = 'room'

    def get_context_data(self, **kwargs): # for add booling list in context variable, which is queryset booking object, that Room has 
        context = super().get_context_data(**kwargs)
        context['booking_list'] = Booking.objects.filter(room=self.object)
        return context

@login_required
@user_passes_test(lambda u: u.is_staff) # need to login
def delete_comment(request, pk):
    comment = get_object_or_404(Review, pk=pk)
    comment.delete()
    messages.success(request, 'wow, your review has been deleted!')
    return redirect('room_upd', pk=comment.room.pk)

@login_required
@user_passes_test(lambda u: u.is_staff)
def delete_booking(request, pk):
    booking = get_object_or_404(Booking, pk=pk)
    room_pk = booking.room.pk
    booking.delete()
    messages.success(request, 'wow, your booking deleted!')
    return redirect('room_upd')
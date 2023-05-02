from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.edit import DeleteView
from django.views.generic import CreateView
from django.urls import reverse_lazy
from .models import Film, Director
# from .models import UserProfile
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model
# from django.views.generic import TemplateView
from .forms import DirectorForm, CustomSingUpForm, FilmForm

def home(request):
    my_queryset = Film.objects.all()
    context={
        'title':'Home page',
        'films': my_queryset,
    }
    return render(request, 'homepage.html', context)

class FilmCreateView(CreateView):
    template_name = 'film/addfilm.html'
    model = Film
    form_class = FilmForm
    success_url = reverse_lazy("addfilm")

class DirectorCreateView(CreateView):
    template_name = 'director/adddirector.html'
    model = Director
    form_class = DirectorForm
    success_url = reverse_lazy("adddirector")

class SignUpView(CreateView):
    form_class = CustomSingUpForm
    success_url = reverse_lazy('login')
    template_name = 'film/signup.html'

# def signup(request):
#     context = {'page_title': 'SignUp'}
#     if request.method == 'POST':
# # POST, generate bound form with data from the request
#         form = PersonForm(request.POST)
# # check if it's valid:
#         if form.is_valid():
#             form_user = form.cleaned_data['user']
#             form_first_name = form.cleaned_data['first_name']
#             form_last_name = form.cleaned_data['last_name']
#             form_password = form.cleaned_data['password']
#             form_email = form.cleaned_data['email']
#             context['forminfo'] = {
#                 'user': form_user,
#                 'first_name': form_first_name,
#                 'last_name': form_last_name,
#                 'password': form_password,
#                 'form_email': form_email
#             }
#             return render(request, 'film/signup.html', context)
#         else:
#             print('ERRORS', form.errors)
#             context['form'] = form
#             return render(request, 'film/signup.html', context)
#     else:
# # GET, generate blank form
#         context['form'] = PersonForm()
#     return render(request, 'film/signup.html', context)

# class ProfileView(DetailView):
#     model = UserProfile
#     template_name = 'film/profile.html'
#     context_object_name = 'profile'

# class ProfileView(LoginRequiredMixin, TemplateView): #LoginRequiredMixin - require to login and access to see ProfileView, and inherit TemplateView
#     template_name = 'film/profile.html'

User = get_user_model()

class ProfileView(LoginRequiredMixin, DetailView): # LoginRequiredMixin - to access users that already login, DetailView - we need to see only about 1 user
    model = User #bull-in model
    template_name = 'profile.html'
    context_object_name = 'user' # take object to template

    def get_object(self, queryset=None): # take loggedin user
        pk = self.kwargs.get('pk') # take user by id
        return self.request.user #self.query.set - access to user

def sfd(request):    
    return render(request, 'film/sfd.html')

class FilmDeleteView(DeleteView):
    template_name = 'film/film_delete.html'
    model = Film
    # form_class = FilmForm
    success_url = reverse_lazy('sfd')

def director(request):
    my_queryset = Director.objects.all()
    context={
        'title':'Directors',
        'directors': my_queryset,
    }
    return render(request, 'director/directors.html', context)

def sdd(request):    
    return render(request, 'director/sdd.html')

class DirectorDeleteView(DeleteView):
    template_name = 'director/director_del.html'
    model = Director
    # form_class = FilmForm
    success_url = reverse_lazy('sdd')
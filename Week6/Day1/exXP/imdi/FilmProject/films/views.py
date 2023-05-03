from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.edit import DeleteView
from django.views.generic import CreateView
from django.urls import reverse_lazy
from .models import Film, Director, Comment
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model
from .forms import DirectorForm, CustomSingUpForm, FilmForm
from .forms import CommentForm

def home(request):
    films = Film.objects.all()
    comments = [CommentForm(initial={'film': film, 'author': request.user}) for film in films]

    films_comments = zip(films, comments)
    context={
        'title':'Home page',
        'films_comments': films_comments
    }
    return render(request, 'homepage.html', context)

# def home(request):
#     films = Film.objects.all()
#     comments = [[comment.content for comment in film.comments.all()] for film in films]

#     films_comments = zip(films, comments)
#     context={
#         'title':'Home page',
#         'films_comments': films_comments
#     }
#     return render(request, 'homepage.html', context)

class FilmCreateView(CreateView):
    template_name = 'film/addfilm.html'
    model = Film
    form_class = FilmForm
    success_url = reverse_lazy("addfilm")

class SignUpView(CreateView):
    form_class = CustomSingUpForm
    success_url = reverse_lazy('login')
    template_name = 'film/signup.html'

User = get_user_model()

class ProfileView(LoginRequiredMixin, DetailView): # LoginRequiredMixin - to access users that already login, DetailView - we need to see only about 1 user
    model = User #python bull-in model
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

class DirectorCreateView(CreateView):
    template_name = 'director/adddirector.html'
    model = Director
    form_class = DirectorForm
    success_url = reverse_lazy("adddirector")

class CommentCreateView(LoginRequiredMixin, CreateView):
    
    template_name = 'film/homepage.html'
    model = Comment
    form_class = CommentForm
    success_url = reverse_lazy("home")

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = self.request.user
        # get_film = Film.objects.filter(pk=self.kwargs['pk']).first()
        # if not get_film:
        #     raise Http404()
        obj.film_id = self.kwargs['pk']
        print(self.kwargs)
        return super(CommentCreateView, self).form_valid(form)
    
    # def post(self, request, *args, **kwargs):
    #     # """
    #     # Handle POST requests: instantiate a form instance with the passed
    #     # POST variables and then check if it's valid.
    #     # """
    #     form = self.get_form()
    #     if form.is_valid():
    #         return self.form_valid(form)
    #     else:
    #         return self.form_invalid(form)

def comments_view(request):
    comments = Comment.objects.all()
    return render(request, 'homepage.html', {'comments': comments})
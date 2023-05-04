from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import DetailView, CreateView
from django.contrib.auth.forms import UserCreationForm
from .models import Profile, Image
from .forms import ProfileForm, ImageForm
from django.contrib.auth.decorators import login_required

class ProfileView(DetailView):
    model = Profile
    template_name = 'profile.html'
    context_object_name = 'profile'

class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/register.html'

def profile_redirect_view(request):
    user = request.user
    if hasattr(user, 'profile'):
        return redirect('update-profile', user.profile.id)

def update_profile(request):
    user = request.user
    profile = user.profile

    if request.method == "POST":
        filled_from= ProfileForm(request.POST, instance=profile)
        if filled_from.is_valid():
            filled_from.save()
            return redirect('profile-page')
        else:
            errors = filled_from.errors
            print(errors)
        
    form = ProfileForm(instance=profile)
    context = {'form': form}
    return render(request, 'index.html', context)

def index(request):
    return render(request, 'index.html')

@login_required
def upload_image(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            image = form.save(commit=False)
            image.user = request.user
            image.save()
            return redirect('my_images')
    else:
        form = ImageForm()
    return render(request, 'upload_image.html', {'form': form})

def view_image(request, image_id):
    image = Image.objects.get(id=image_id)
    return render(request, 'view_image.html', {'image': image})

def view_images(request):
    images = Image.objects.all().order_by('-id')
    return render(request, 'view_images.html', {'images': images})

@login_required
def my_images(request):
    my_images = Image.objects.filter(user=request.user).order_by('-id')
    return render(request, 'my_images.html', {'my_images': my_images})
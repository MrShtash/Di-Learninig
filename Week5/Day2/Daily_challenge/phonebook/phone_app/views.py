from django.shortcuts import render
from .models import Person
from .forms import SearchForm

# Create your views here.

def search(model, value):
    result = None
    try:
        model_instance = model.objects.get(name=value)
        result = model_instance
    except model.DoesNotExist:
        pass
    try:
        model_instance = model.objects.get(phone_number=value)
        result = model_instance
    except model.DoesNotExist:
        pass
    return result

def search_person(request, search_value: str):
    context = {}
    # by_name = search(Person, 'name', search_value)
    # by_phonenumber = search(Person, 'phone_number', search_value)
    person_info = search(Person, search_value)

    # if by_name is not None:
    #     context = {'Person': by_name}

    # if by_phonenumber is not None:
    #     context = {'Person': by_phonenumber}

    if person_info is not None:
        context = {'person': person_info}

    return render(request, 'person_info.html', context)

# ==== extra (trying new topic) ====
# data for profile
def profile_view(request, search_value: str):
    context = {}
    person_info = search(Person, search_value)
    if person_info is not None:
        person_profile = person_info.profile
        profile_language = person_profile.Language.all().order_by('name')

        context = {'person_info': person_info, 'person_profile': person_profile, 'language': profile_language}
    return render(request, 'profile.html', context)

def search_ph(request):
    context = {}
    if request.method == 'GET': # check request, if its GET
        form = SearchForm(request.GET) # create instance SearchForm form class with GET data from request
        if form.is_valid(): 
            name = form.cleaned_data['name'] # take field name
            phone_number = form.cleaned_data['phone_number'] # take field ph number
            person_info = search(Person, name) or search(Person, phone_number) # search Person instance
            if person_info: # if we find reson instance
                context['person'] = person_info # add to context
                # return redirect('search_person', search_value=name)
            else:
                context['error'] = 'Person not found'

    else:
        form = SearchForm() # if method not GET we create a empty instance SearchFrom class

    context['form'] = form

    return render(request, 'search_phone.html', context)
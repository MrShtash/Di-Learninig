from django.shortcuts import render
from .models import Person

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
        person_language = person_profile.Language.all().order_by('name')

        context = {'person_info': person_info, 'person_info': person_profile, 'language': person_language}
    return render(request, 'profile.html', context)

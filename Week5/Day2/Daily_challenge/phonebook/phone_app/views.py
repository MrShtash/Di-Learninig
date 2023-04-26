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
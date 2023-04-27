from django.shortcuts import render
from django.http import HttpResponse
from .models import Family, Animal

# Create your views here.

def family(request, family_id):
    family = Family.objects.get(id = family_id)
    animal_family = Animal.objects.filter(family_id = family_id)
    context = {'family': family, 'animals': animal_family}
    return render(request, 'family.html', context)


def anmls(request, id):
    animal = Animal.objects.get(id=id)
    return render(request, 'anmls.html', {'animal': animal})

def animals(request):
    animals = Animal.objects.all()
    return render(request, 'animals.html', {'animals':animals})
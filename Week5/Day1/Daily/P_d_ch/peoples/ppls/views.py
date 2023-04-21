from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    people = [{'id': 1, 'name': 'Bob Smith', 'age': 35, 'country': 'USA'},
            {'id': 2, 'name': 'Martha Smith','age': 60, 'country': 'USA'},
            {'id': 3, 'name': 'Fabio Alberto','age': 18, 'country': 'Italy'},
            {'id': 4, 'name': 'Dietrich Stein', 'age': 85, 'country': 'Germany'}]
    sorted_people = sorted(people, key=lambda p: p['age'])
    context = {'people': sorted_people}
    return render(request, 'index.html', context)

def details(request,id):
    people = [{'id': 1, 'name': 'Bob Smith', 'age': 35, 'country': 'USA'},
            {'id': 2, 'name': 'Martha Smith', 'age': 60, 'country': 'USA'},
            {'id': 3, 'name': 'Fabio Alberto','age': 18, 'country': 'Italy'},
            {'id': 4, 'name': 'Dietrich Stein', 'age': 85, 'country': 'Germany'}]
    context = {'name': people[id]['name'],
               'age': people[id]['age'],
               'country': people[id]['country']}
    return render(request, 'details.html', context)


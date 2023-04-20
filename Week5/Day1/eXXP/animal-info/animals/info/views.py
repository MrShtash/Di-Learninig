from django.shortcuts import render
from django.http import HttpResponse
import json

# Create your views here.

def index(request,id):
    f = open('info/animals.json')
    data = json.load(f)
    context = {
                'family_name': data['families'][id]['name']}
    f.close()
    return render(request, 'index.html', context)

def anmls(request,id):
    f = open('info/animals.json')
    data = json.load(f)
    context = {
                'animals': data['animals'][id]['name'],
                'legs': data['animals'][id]['legs'],
                'weight': data['animals'][id]['weight'],
                'height': data['animals'][id]['height'],
                'speed': data['animals'][id]['speed'],
                'family': data['animals'][id]['family'],
                }
    f.close()
    return render(request, 'anmls.html', context)


from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.urls import reverse_lazy
from rest_framework import generics
import json
from django.http import JsonResponse
from .models import Login
from .serializers import LoginSerializer
from django.views.decorators.csrf import csrf_exempt
from .forms import *
from django.contrib.auth import logout

# Create your views here.

class LogInView(generics.ListCreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    # template_name = 'login.html'
    # success_url = reverse_lazy('manager.html')
    
@csrf_exempt
def test(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            return JsonResponse(data , safe=False)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return render(request, 'manager.html', {})

# def add_work(request):
#     if request.method == 'POST':
#         print('POST DATA: ', request.POST)
#         print('POSTING DATA')
#         work_form = WorkAddForm(request.POST)

#         if work_form.is_valid():
#             work_form.save()

#             return HttpResponse('successfully saved')
#         else:
#             return HttpResponse(work_form.errors)
    
#     if request.method == 'GET':
#         work_form = WorkAddForm() # create new variable
#         print('GET DATA: ', request.GET) # data associated with the GET method
#         print('GETTING DATA OUT')
#         context = {'form': work_form}

#     return render(request, 'add_work.html', context)

# def all_work_view(request):
#     work_list = Work.objects.all().order_by('pk') # take all objects from DB and sort by pk
#     context = {'work_list': work_list} # create list with key todo_list that has list to_do objects

#     return render(request, 'all_work.html', context)

# def logout_user(request):
#     logout(request)
#     return redirect('login.html')
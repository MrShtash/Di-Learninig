from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from rest_framework import generics
import json
from django.http import JsonResponse
from .models import Login
from .serializers import LoginSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# class LogInView(Login):
#     # template_name = 'scriptum/login.html'
#     # form_class = 
#     # success_url = reverse_lazy('')
#     # queryset = Login.objects.all()
#     serializer_class = LoginSerializer
#     model = Login

# @csrf_exempt
class LogInView(generics.ListCreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    
@csrf_exempt
def test(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            return JsonResponse(data , safe=False)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return render(request, 'login.html', {})


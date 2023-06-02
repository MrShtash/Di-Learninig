from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.urls import reverse_lazy
from rest_framework import generics
import json
from django.http import JsonResponse
from .models import *
from .serializers import LoginSerializer
from django.views.decorators.csrf import csrf_exempt
from .forms import *
from django.contrib.auth import logout

# Create your views here.

class LogInView(generics.ListCreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    template_name = 'login.html'
    # success_url = reverse_lazy('manager.html')
    
@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            return JsonResponse(data , safe=False)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return render(request, 'login.html', {})

def add_work(request):
    if request.method == 'POST':
        print('POST DATA: ', request.POST)
        print('POSTING DATA')
        work_form = WorkAddForm(request.POST)

        if work_form.is_valid():
            work_form.save()

            return HttpResponse('successfully saved')
        else:
            return HttpResponse(work_form.errors)
    
    if request.method == 'GET':
        work_form = WorkAddForm() # create new variable
        print('GET DATA: ', request.GET) # data associated with the GET method
        print('GETTING DATA OUT')
        context = {'form': work_form}

    return render(request, 'add_work.html', context)

def all_work_view(request):
    work_list = Work.objects.all().order_by('pk') # take all objects from DB and sort by pk
    context = {'work_list': work_list} # create list with key todo_list that has list to_do objects

    return render(request, 'all_work.html', context)

def logout_user(request):
    logout(request)
    return redirect('login.html')

def manager_profile_view(request):
    manager = Specialist.objects.get(user=request.user)
    companies = manager.company_set.all()
    total_workload = Work.objects.filter(specialist=manager).count()  # Calculate total workload

    context = {
        'manager': manager,
        'companies': companies,
        'total_workload': total_workload,
    }
    return render(request, 'manager_profile.html', context)

def company_view(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    projects = company.project_set.all()
    total_paid_amount = 0  # Calculate total paid amount

    context = {
        'company': company,
        'projects': projects,
        'total_paid_amount': total_paid_amount,
    }
    return render(request, 'company.html', context)

def project_view(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    works = project.work_set.all()
    total_hours_worked = works.aggregate(total_hours=models.Sum('hour'))['total_hours'] or 0

    if request.method == 'POST':
        form = WorkAddForm(request.POST)
        if form.is_valid():
            work = form.save(commit=False)
            work.project = project
            work.save()
            return redirect('project', project_id=project.id)
    else:
        form = WorkAddForm()

    context = {
        'project': project,
        'works': works,
        'total_hours_worked': total_hours_worked,
        'form': form,
    }
    return render(request, 'project.html', context)
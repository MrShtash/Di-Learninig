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
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from decimal import Decimal

# Create your views here.

class LogInView(generics.ListCreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    template_name = 'login.html'
    # success_url = reverse_lazy('manager.html')
    
# @csrf_exempt
# def signup(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             return JsonResponse(data , safe=False)
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON'}, status=400)
#     return render(request, 'login.html', {})

def login_auth(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('specialist')
        else:
            return redirect('signup')
    return render(request, 'login.html', {})

# @login_required
# def add_work(request, project_id):
#     project = get_object_or_404(Project, id=project_id)
#     work_form = WorkAddForm(request.POST or None)

#     if work_form.is_valid():
#         new_work = work_form.save(commit=False)
#         new_work.project = project
#         new_work.specialist = request.user
#         new_work.save()
#         messages.add_message(request, messages.INFO, "Work successfully added")

#         return redirect('specialist')

#     context = {'form': work_form, 'project': project}

#     return render(request, 'add_work.html', context)

@login_required
def all_work_view(request):
    work_list = Work.objects.all().order_by('pk') # take all objects from DB and sort by pk
    context = {'work_list': work_list} # create list with key work_list that has list work objects

    return render(request, 'all_work.html', context)

@login_required
def logout_user(request):
    logout(request)
    return redirect('login.html')

@login_required
def manager_profile_view(request):
    manager = Specialist.objects.get(user=request.user)
    companies = manager.company_set.all()
    total_workload = Work.objects.filter(specialist=request.user).count()  # calc total workload

    context = {
        'manager': manager,
        'companies': companies,
        'total_workload': total_workload,
    }
    return render(request, 'specialist.html', context)

@login_required
def company_view(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    projects = company.project_set.all()
    total_paid_amount = company.deposit.cash # calc total amount

    specialist = company.specialist # retrieve the specialist associated with the company
    hourly_rate = specialist.grade.cost # retrieve the hourly rate from the specialist grade

    total_hours_worked = 0 # calc the total spent amount in hours
    for project in projects:
            total_hours_worked += project.work_set.aggregate(total_hours=models.Sum('hour'))['total_hours'] or 0

    total_spent_amount = total_hours_worked * hourly_rate # calc the total spent amount in money based on the hourly rate
    rest_of_money = total_paid_amount - total_spent_amount # calc the remaining money (rest of money)

    context = {
        'company': company,
        'projects': projects,
        'total_paid_amount': total_paid_amount,
        'total_spent_amount': total_spent_amount,
        'rest_of_money': rest_of_money,
    }
    return render(request, 'company.html', context)

@login_required
def project_view(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    works = project.work_set.all()
    total_hours_worked = works.aggregate(total_hours=models.Sum('hour'))['total_hours'] or 0

    deposit = project.deposit.cash  # sum the deposit represents the total deposit amount
    specialist = Specialist.objects.get(user=request.user)
    specialist_grade_type = specialist.grade.grade_type  # sum the specialist grade is stored in the 'grade' field of the user model
    grade_cost = Grade.objects.get(grade_type=specialist_grade_type).cost  # retrieve the grade cost associated with the specialist's grade type

    total_hours = Decimal(deposit) / Decimal(grade_cost) # calc the total hours based on the deposit and specialist grade

    difference_hours = total_hours - total_hours_worked # calc the difference between the total hours and the hours worked

    # if request.method == 'POST':
    #     form = WorkAddForm(request.POST)
    #     if form.is_valid():
    #         work = form.save(commit=False)
    #         work.project = project
    #         work.save()
    #         return redirect('project', project_id=project.id)
    # else:
    # form = WorkAddForm()
    form = WorkAddForm(request.POST or None)

    if form.is_valid():
        new_work = form.save(commit=False)
        new_work.project = project
        new_work.specialist = request.user
        new_work.save()
        messages.add_message(request, messages.INFO, "Work successfully added")

        return redirect('specialist')

    context = {
        'project': project,
        'works': works,
        'total_hours_worked': total_hours_worked,
        'total_hours': total_hours,
        'difference_hours': difference_hours,
        'form': form,
    }
    return render(request, 'project.html', context)
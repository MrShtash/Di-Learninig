from rest_framework import serializers
# from django.contrib.auth import get_user_model
from .models import Department, Employee, Project, Task
# User = get_user_model()

class DepartmentSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='department-detail')
    class Meta:
        model = Department
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='employee-detail')
    class Meta:
        model = Employee
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='project-detail')
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='task-detail')
    class Meta:
        model = Task
        fields = '__all__'
from django.shortcuts import (render,
                            redirect
                            )
from .models import (Department,
                    Employee,
                    Project,
                    Task
                    )
from .serializers import (DepartmentSerializer,
                          EmployeeSerializer,
                          ProjectSerializer,
                          TaskSerializer
                          )
# from rest_framework.response import Response
from rest_framework.permissions import (IsAdminUser,
                                        IsAuthenticated,
                                        AllowAny
                                        )
# from rest_framework.status import (HTTP_200_OK,
#                                    HTTP_201_CREATED,
#                                    HTTP_202_ACCEPTED,
#                                    HTTP_400_BAD_REQUEST)
from rest_framework import generics
from .permissions import IsDepartmentAdmin

# Create your views here.

class DepartmentListAPIView(generics.ListAPIView):
    permissin_classes = (IsDepartmentAdmin, )
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetailView(generics.RetrieveAPIView):
   permissin_classes = (IsDepartmentAdmin, )
   queryset = Department.objects.all()
   serializer_class = DepartmentSerializer

class DepartmentCreateAPIView(generics.CreateAPIView):
    model = Department
    serializer_class = DepartmentSerializer
    # permissin_classes = (AllowAny, )

class EmployeeListAPIView(generics.ListAPIView):
    permissin_classes = (IsDepartmentAdmin, )
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetailView(generics.RetrieveAPIView):
   permissin_classes = (IsDepartmentAdmin, )
   queryset = Employee.objects.all()
   serializer_class = EmployeeSerializer

class EmployeeCreateAPIView(generics.CreateAPIView):
    model = Employee
    serializer_class = EmployeeSerializer
    # permissin_classes = (AllowAny, )

class ProjectListAPIView(generics.ListAPIView):
    permissin_classes = (IsDepartmentAdmin, )
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectCreateAPIView(generics.CreateAPIView):
    model = Project
    serializer_class = ProjectSerializer
    # permissin_classes = (AllowAny, )

class ProjectDeleteView(generics.DestroyAPIView):
   queryset = Project.objects.all()
   serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveAPIView):
   permissin_classes = (IsDepartmentAdmin, )
   queryset = Project.objects.all()
   serializer_class = ProjectSerializer

class ProjectUpdateAPIView(generics.UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskListAPIView(generics.ListAPIView):
    permissin_classes = (IsDepartmentAdmin, )
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskCreateAPIView(generics.CreateAPIView):
    model = Task
    serializer_class = TaskSerializer
    # permissin_classes = (AllowAny, )

class TaskDeleteView(generics.DestroyAPIView):
   queryset = Task.objects.all()
   serializer_class = TaskSerializer

class TaskDetailView(generics.RetrieveAPIView):
   permission_classes = (IsDepartmentAdmin, )
   queryset = Task.objects.all()
   serializer_class = TaskSerializer

class TaskUpdateAPIView(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
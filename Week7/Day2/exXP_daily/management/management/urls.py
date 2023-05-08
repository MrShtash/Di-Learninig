# """
# URL configuration for management project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/4.2/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """
from django.contrib import admin
from django.urls import (path,
                        include
                        )
from management_api.views import (DepartmentListAPIView,
                                  DepartmentCreateAPIView,
                                  EmployeeListAPIView,
                                  EmployeeCreateAPIView,
                                  ProjectListAPIView,
                                  ProjectCreateAPIView,
                                  ProjectDeleteView,
                                  ProjectDetailView,
                                  ProjectUpdateAPIView,
                                  TaskListAPIView,
                                  TaskCreateAPIView,
                                  TaskDeleteView,
                                  TaskDetailView,
                                  TaskUpdateAPIView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth/management/department/', DepartmentListAPIView.as_view(), name = 'department-list'),
    path('api-auth/management/department/<int:pk>/', DepartmentCreateAPIView.as_view(), name = 'department'),
    path('api-auth/management/employee/', EmployeeListAPIView.as_view(), name = 'employee-list'),
    path('api-auth/management/employee/<int:pk>/', EmployeeCreateAPIView.as_view(), name = 'employee'),
    path('api-auth/management/project/', ProjectListAPIView.as_view(), name = 'project-list'),
    path('api-auth/management/project/<int:pk>/', ProjectCreateAPIView.as_view(), name = 'project'),
    path('api-auth/management/project/<int:pk>/update/', ProjectUpdateAPIView.as_view(), name = 'project-upd'),
    path('api-auth/management/project/<int:pk>/delete/', ProjectDeleteView.as_view(), name = 'project-delete'),
    path('api-auth/management/project/<int:pk>/retrieve/', ProjectDetailView.as_view(), name = 'project-detail'),
    path('api-auth/management/task/', TaskListAPIView.as_view(), name = 'task-list'),
    path('api-auth/management/task/<int:pk>/', TaskCreateAPIView.as_view(), name = 'task'),
    path('api-auth/management/task/<int:pk>/update/', TaskUpdateAPIView.as_view(), name = 'task-upd'),
    path('api-auth/management/task/<int:pk>/delete/', TaskDeleteView.as_view(), name = 'task-delete'),
    path('api-auth/management/task/<int:pk>/retrieve/', TaskDetailView.as_view(), name = 'task-detail'),
]

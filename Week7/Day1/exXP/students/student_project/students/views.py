from django.shortcuts import render
# from django.views.decorators.csrf import csrf_exempt
# from django.http import HttpResponse, JsonResponse
# from rest_framework.parsers import JSONParser
from django.shortcuts import redirect
from .models import Student
from .serializers import StudentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import (IsAdminUser,
                                        IsAuthenticated,
                                        AllowAny)
from rest_framework.status import (HTTP_200_OK,
                                   HTTP_201_CREATED,
                                   HTTP_202_ACCEPTED,
                                   HTTP_400_BAD_REQUEST,
                                #    HTTP_204_NO_CONTENT
                                   )

# @csrf_exempt
# def student_list(request):
#     if request.method == 'GET':
#         queryset = Student.objects.all()
#         serializer = StudentSerializer(queryset, many = True)
#         return JsonResponse(data=serializer.data, safe=False)
    
#     if request.method == 'POST':
#         article_data = JSONParser.parse(request)
#         serializer = StudentSerializer(data=article_data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = 201)
#         return JsonResponse(serializer.errors, status = 400)

# @csrf_exempt
# def student_detail(request, article_pk):

class StudentView(APIView): #class based view, APIview have inside methods get and post
    permission_classes = (AllowAny, )
    # get method’s grab all instances from the model, serialize them and return them as a response.
    def get(self, request, *args, **kwargs):
        date_joined_param = request.GET.get('date_joined')
        if date_joined_param:
            queryset = Student.objects.filter(date_joined=date_joined_param)
        else:
            queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many = True) #extract all the instances and pass them into the Serializer
        # many = True, because we are passing multiple instances
        return Response(serializer.data, status = HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data) # request.post work only with form data, request.data work with arbitrary data 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = HTTP_201_CREATED)
        return Response(serializer.errors, status = HTTP_400_BAD_REQUEST) #if data not valid 
    
class StudentDetailView(APIView):
    permission_classes = (AllowAny, )
    # def put(self, request, pk, *args, **kwargs):
    #     article = Student.objects.get(id=pk)
    #     serializer = StudentSerializer(article, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status = HTTP_400_BAD_REQUEST)
    
    # def delete(self, request, pk, *args, **kwargs):
    #     article = Student.objects.get(id=pk)
    #     article.delete()
    #     return Response(status = HTTP_204_NO_CONTENT)
    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk:
            try:
                instance = Student.objects.get(id=pk)
                serializer = StudentSerializer(instance)
            except Student.DoesNotExist:
                return Response({"detail": "Student not found"}, status=HTTP_400_BAD_REQUEST)
        else: 
            queryset = Student.objects.all()
            serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    
    # def post(self, request, *args, **kwargs):
    #     serializer = PostSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=HTTP_200_OK)
    #     return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        
    def put(self, request, *args, **kwargs): # use same data + pk
        pk = kwargs.get('pk')
        if pk:
            try:
                student_upd = Student.objects.get(id=pk) # accept the instance 2 update (stident_upd) and..
                serializer = StudentSerializer(student_upd, data=request.data) # ..and data to update the instance with
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
            except Student.DoesNotExist:
                return Response({"detail": "Student not found"}, status=HTTP_400_BAD_REQUEST)
        else:
            return Response({"detail": "pk wasn't found"}, status=HTTP_400_BAD_REQUEST)
        
    def delete(self, request, *args, **kwargs): # use same data + pk
        pk = kwargs.get('pk')
        if pk:
            try:
                student_del = Student.objects.get(id=pk)
                student_del.delete()
                return Response({"detail": "Post was deleted!"}, status=HTTP_202_ACCEPTED)
            except Student.DoesNotExist:
                return Response({"detail": "Post not found"}, status=HTTP_400_BAD_REQUEST)
        else:
            return redirect('post-list')
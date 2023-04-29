from django.shortcuts import render
from django.http import HttpResponse
from .models import Category, Todo
from .forms import TodoForm

# Create your views here.

def add_todo_view(request):
    
    # GET mode - getting data/content out
# function check, user posting or getting info
    if request.method == 'POST': 
        print('POST DATA: ', request.POST) # data associated with the POST method
        print('POSTING DATA')
        # create new variable (new TodoForm object) with post data and check
        todo_filled_form = TodoForm(request.POST) # put the data from the request into the ModelForm

        if todo_filled_form.is_valid(): # check if all fields contain the correct data
            todo_filled_form.save() # new_todo = # save data into database

            # category = todo_filled_form.cleaned_data['category']
            # print('Category', category)
            # category_obj = Category.objects.get(name = category)

            # new_todo.category.add(category_obj)
            return HttpResponse('Successfully saved') # need to add date in YYYY - MM - DD
        else:
            return HttpResponse(todo_filled_form.errors)
# check if request method is get
    if request.method == 'GET':
        todo_form = TodoForm() # create new variable
        print('GET DATA: ', request.GET) # data associated with the GET method
        print('GETTING DATA OUT')
        context = {'form': todo_form}

    return render(request, 'add_todo.html', context)

def all_todo_view(request):
    todo_list = Todo.objects.all().order_by('pk') #take all jbjects from DB and sort by pk
    context = {'todo_list': todo_list} #create list with key todo_list that has list to_do objects

    return render(request, 'all_todo.html', context)
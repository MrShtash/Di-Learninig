from django.shortcuts import render
from .forms import CategoryForm, GifForm, LikeForm
from .models import Category, Gif
from django.http import HttpResponse

# Create your views here.

menu = [{'title': "Home", 'url_name': 'home'},
        {'title': "Add gif", 'url_name': 'add_gif'},
        {'title': "Add category", 'url_name': 'add_category'},
]

# add new gif
def add_gif_view(request): # each request - method, it can be GET and POST in this case
    # Get mode - getting content out
    # POST - changing somethong inside DB
    # request doesn't have just method, also has data itself
    # gif_form = GifForm()
    if request.method == 'POST':
        # print('POST data: ', request.POST) # data associated with Get method
        # print('posting data')
        gif_field_form = GifForm(request.POST) # put the data from the request into the model form
        if gif_field_form.is_valid(): # check if all fields contain the correct data
            new_gif = gif_field_form.save() # save data into DB

            categories = gif_field_form.cleaned_data['categories'] # <Queryset [<Category: animals>]>
            print('CATEGORY', categories)
            # print('categories', categories)
            # category_obj = Category.objects.get(name=category)

            new_gif.categories.add(*categories) # we have [<Category: animals>, <Category: memes>] and its give error, thats why we take * and make a list without qiery sets

            # new_gif.categories.add(category_obj)
            return HttpResponse('successfully saved')
        
        else:
            print(gif_field_form.errors)
            return HttpResponse(gif_field_form.errors)

    if request.method == 'GET':
        gif_form = GifForm()
        # print(request.GET) # data associated with Get method
        print('GET data: ', request.GET)
        print('getting data out')
        context = {'form': gif_form}
    
        return render(request, 'add_gif.html', context)

# add category
def add_category_view(request):
    if request.method == 'POST':
        print('POST data: ', request.POST) # data associated with Get method
        print('posting data')
        category_field_form = CategoryForm(request.POST) # put the data from the request into the model form
        if category_field_form.is_valid(): # check if all fields contain the correct data
            category_field_form.save() # save data into DB
            return HttpResponse('successfully saved')

    if request.method == 'GET':
        category_form = CategoryForm()
        # print(request.GET) # data associated with Get method
        print('GET data: ', request.GET)
        print('getting data out')
        context = {'form': category_form}
    
    return render(request, 'add_category.html', context)

def gifs_view(request):
    if request.method == 'POST':
        likeform_submitted = LikeForm(request.POST)
        if likeform_submitted.is_valid():
            gif = likeform_submitted.cleaned_data['gif']
            like = likeform_submitted.cleaned_data['like']

            if like:
                gif.likes += 1
            else:
                gif.likes -= 1

            gif.save()

            # print('GIF:', gif) # GIF: bboy Mario, gif King (ex)
            # print('LIKE:', like) # Like: True (ex)

    gifs_all = Gif.objects.all().order_by('title', 'likes') # extract all gifs
    like_forms = [LikeForm(initial={'gif':gif_instance, 'like': True}) for gif_instance in gifs_all] # create 2forms for each gif, they has same initial value for gif field,
    # coz connected with the same gif, but luke and dislike is going to be different (True/False)
    # 
    dislike_forms = [LikeForm(initial={'gif':gif_instance, 'like': False}) for gif_instance in gifs_all] # the initial is going to be a gif instance (to create each gif inctance) a like form,
    # and gif value, gifs field value is going to be = instance
    gifs_forms = list(zip(gifs_all, like_forms, dislike_forms)) # connect by index them, put inside a list. result% gif, like form, dislike form
    context = {'gifs_forms': gifs_forms} # passed into context
    return render (request, 'gifs_all.html', context)

def home(request):
    gif_list=Gif.objects.all()
    context={'gif_list':gif_list}
    for p in gif_list:
        print(p.url)
    return render(request, 'home.html', context)

def category(request, c_id):
    cat_name=Category.objects.get(pk=c_id)
    gif_list=Gif.objects.filter(categories__pk=c_id)
    context={'menu':menu, 'cat_name':cat_name, 'gif_list':gif_list}
    for p in gif_list:
        print(p.url)
    return render(request, 'category.html', context)

def all_category(request):
    categories=Category.objects.all()
    # print(categories)
    context={'categories':categories}
    return render(request, 'all_category.html', context)

def one_gif(request, gif_id): # there r big steps with id but its work
    gif=Gif.objects.get(pk=gif_id)
    context={'menu':menu, 'gif':gif}
    return render(request, 'one_gif.html', context)
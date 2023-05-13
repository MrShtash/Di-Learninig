import os
# import sys
import django
from datetime import datetime
import requests
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books.settings')
django.setup()
from book_review.models import Book

# # API_KEY = 'AIzaSyBI6uRg9t3UEhGqjWQlmtz08C7aHNi6-Q8'
# # QUERY = 'Harry Potter'
# # response = requests.get(f'https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&key=AIzaSyBI6uRg9t3UEhGqjWQlmtz08C7aHNi6-Q8')
# response = requests.get('https://www.googleapis.com/books/v1/volumes')

#----------------------------------------------METHOD 1----------------------------------------------


response = requests.get(f'https://www.googleapis.com/books/v1/volumes?q=Conan&key=AIzaSyB8HryR4bXPc1j4A7fmQH0yH28W-dLZ_Tk')
# print(response.text)
API_KEY = 'AIzaSyB8HryR4bXPc1j4A7fmQH0yH28W-dLZ_Tk'
QUERY = 'Conan'

data = response.json() # convert the HTTP response from the google books api into a json object
# print(data)

books = [] # create empty books list
def parse_date(date_str: str) -> datetime:
    #  year
    if len(date_str) == 4:
        # create Jan 1st
        return datetime.strptime(f"{date_str}-01-01", '%Y-%m-%d')
    # year month
    if len(date_str) == 7:
        # create 1st month  date
        return datetime.strptime(f"{date_str}-01", '%Y-%m-%d')
    if len(date_str) == 10:
        return datetime.strptime(date_str, '%Y-%m-%d')

for item in data['items']: # check all items key in json (key contain query relevant book in list)
    volume_info = item.get('volumeInfo', {}) # recieve volumeinfo key from book data. if volumekey is none - return empty dict {}

# create obj, use get method to extract fields from volumeinfo dict. If field is none we use default value 
    book = Book(
        title=volume_info.get('title', ''),  
        author=volume_info.get('authors', [])[0] if 'authors' in volume_info else '', # check how many authors and save 1st
        published_date=volume_info.get('publishedDate', ''), 
        description=volume_info.get('description', ''), 
        page_count=volume_info.get('pageCount', None), 
        categories=', '.join(volume_info.get('categories', [])), 
        thumbnail_URL=volume_info.get('imageLinks', {}).get('thumbnail', '') 
        )
    
    if book.published_date:
        try:
            book.published_date = parse_date(book.published_date)
        except ValueError:
            pass

    books.append(book) # add obj to books list

Book.objects.bulk_create(books) # save books to db, use django method bulk_create. Don't use book.save(), coz bulk_create can save multiple books at once



#----------------------------------------------METHOD 2----------------------------------------------

# search_lib=['space', 'fly', 'star', 'shine', 'engine']
# # search_lib=['sun']

# url = 'https://www.googleapis.com/books/v1/volumes'
# param = {
#     'q':'science:keyes',
#     'key':'AIzaSyB8HryR4bXPc1j4A7fmQH0yH28W-dLZ_Tk'
# }

# def get_request(url, param):
#     r = requests.get(url, param)
#     if r.status_code == 200:
#         content = r.content
#         r.close()
#         return (content)
#     else:
#         print(f'Parametr {param}. No ansver')
#     r.close()

# for n in search_lib:
#     param['g'] = n+':keyes'
#     ansver = get_request(url, param)
#     st = json.loads(ansver)
#     v = json.dumps(st,indent=2)
#     print(v)


#     format_yyyymmdd = "%Y-%m-%d"

#     for b in st['items']:
#         print (b['id'])
#         try:
#             title = b['volumeInfo']['title']
#             print(title)
#             author = ','.join(b['volumeInfo']['authors'])
#             published_date = datetime.strptime(b['volumeInfo']['publishedDate'], format_yyyymmdd) \
#                             if len(b['volumeInfo']['publishedDate'])>4 \
#                             else datetime.strptime ((b['volumeInfo']['publishedDate']+'-01-01'), format_yyyymmdd)
#             description = b['volumeInfo'].get('description', ' ')
#             page_count = b['volumeInfo'].get('pageCount', ' ')
#             categories = " ".join (b['volumeInfo'].get('categories', [' ']))
#             thumbnail_url = b['volumeInfo']['imageLinks']['thumbnail']
#             print ("*******\n",  b['id'],title,author, published_date, description, page_count, categories, thumbnail_url,"/n/n")
#             r=Book(title = title, 
#                 author = author, 
#                 published_date = published_date, 
#                 page_count = page_count,
#                 categories = categories,
#                 thumbnail_URL=thumbnail_url
#                 )
#             r.save()
#         except:
#             print ("Incomplete data go to the next record")
#             continue
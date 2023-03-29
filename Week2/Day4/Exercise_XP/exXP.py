import random # for ex 4 and 7

# 1.1
# def display_message (str) -> str:
#     concatenated = str
#     return concatenated
# result = display_message('Hi, my name is Stas and I will be a best developer in the world')
# print(display_message('Hi, my name is Stas and I will be a best developer in the world'))

# 1.2
# def display_message (str) -> str:
#     return print('Hi, my name is Stas and I will be a best developer in the world')
# (display_message()

# 2.1
# def favorite_book (title) -> str:
#     concatenated = str
#     return concatenated
# title = ("Alice Adventures in Wonderland")
# result = favorite_book('title')
# print('One of my favorite books is '+ title)

# 2.2
# def favorite_book(title) -> str:
#     return print(f'One of my favorite books is {title}')
# favorite_book(title)

# 3.1
#def describe_city(str1, str2) -> str:
#     concatenated = str1 + '' + str2
#     return concatenated

# str1 = ('Jerusalem')
# str2 = ('Israel')
# result = describe_city ('str1','str2')

# print(str1 +' in '+ str2)

# 3.2
# def describe_city(str1, str2='Israel') -> str: # use str2 as defoult value
#     print(f'{str1} is in {str2}')

# describe_city('Jerusalem')

# 4
# def disp_num (a:int) -> int:
#     b = random.randint(0,100) # use rand function random for another int
#     if a == b:
#         return 'succes'
#     else:
#         return f'error {a} {b}' # message with numbers
# a = 18 #create a value
# print(disp_num(a))

# 5
# def make_shirt(size:int, text:str) -> str:
#     return print(f'shirt is {size} and the text is {text}')
# make_shirt(10, "yo!")

# 5.1 modify:big size and defoult text
# def make_shirt(size:int, text='I love Python') -> str:
#     return print(f'shirt is {size} and the text is {text}')
# make_shirt(100)

# 5.2 
# def make_shirt(size="L", text='I love Python') -> str:
#     return print(f'shirt is {size} and the text is {text}')
# make_shirt() # defoult L size and defoult message
# make_shirt('M') # size M defoult message
# make_shirt('S','hello') # any saize any message

# 5.3 # Call the function make_shirt() using keyword arguments.
# def make_shirt(size:int, text:str) -> str:
#     print(f'shirt is {size} and the text is {text}')
# make_shirt(text='YO!', size=4)

# 6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# # 6. Pass the list to a function called show_magicians(), which prints the name of each magician in the list. 
# def show_magicians(magician_names): 
#     for name in magician_names:
#         print(name) # print every name

# # add func and change names in list 
# def make_great(great_m):
#     i = 0 # create iterator
#     for name in great_m:
#         great_m[i] = 'the Great ' + great_m[i] # use new list with iterator for each name
#         i = i + 1 # change value

# show_magicians(magician_names)
# make_great(magician_names)
# show_magicians(magician_names)

# 7
def get_random_temp(season: str) -> float: # use float, coz it's in task
    # a = random.randint(-10,40) # create ranfe for a
    # return a
    result_dict = {
        'winter': random.uniform(-10,16), # create range of temperature in each season. random.uniform for middle value between low ang high
        'spring': random.uniform(15,20),
        'summer': random.uniform(20,35),
        'autumn': random.uniform(10,20),
        }
    return result_dict.get(season) 

def main():
    season = input('please, type a season (summer/autumn/winter/spring): ')

    # result1 = get_random_temp(season)
    return round(get_random_temp(season),1) # type '1' for value after comma

print(main())
# ex 1: Convert Lists Into Dictionaries
# keys = ['Ten', 'Twenty', 'Thirty'] # create list with keys
# values = [10, 20, 30] # create list with values

# print(keys)
# print(values)

# connected = dict(zip(keys, values)) # create dict
# print(connected)

# ex 2: Cinemax
# family = {} # create dict
# while True:
#     name = input('please, write your name (if you finish, type "quit"): ') #ask ti enter name
#     if name == 'quit': # when the loop must stop
#         break
#     else:
#         age = input('enter your age: ') # ask to add ages
#         family[name] = age #end of discrubing the dict (what is the key, what is value)
#         print(family)

# age=int(age) # discrube age

# total = 0

# if age >= 12: # discrube a prise that depends of age
#     total + 15
# elif 3 <= age < 12:
#     total + 10

# print(f"{total}$")

# ex 3: Zara
# brand = {'name:': 'Zara', 'creation_date:': '1975', 'creator_name:': 'Amancio Ortega Gaona', 'international_competitors:': ['Gap, H&M, Benetton'], 'type_of_clothes:': 'men, women, children, home', 'number_stores:': '7000', 'major_color:': 'France: blue, Spain: red, US: pink, green'}
# print(brand) # create disc

# brand['number_stores:'] = 2 # change value
# print(brand)

# print(f"Zara's buyers: {brand['type_of_clothes:']}") # Print a sentence that explains who Zaras clients are.

# brand['country_creation'] = 'Spain' # add new key and value
# print(brand)

# brand['international_competitors:'] = ['Gap', 'H&M', 'Benetton', 'Desigual'] # add Desigual in value and change str to list
# print(brand)
# # if 'international_competitors' in brand.keys():
# #     brand['international_competitors'].append('Desigual')

# brand.pop('creation_date:') # del creation date
# print(brand)

# print('international_competitors:', brand['international_competitors:'][-1]) # print last value for key

# brand['major_color:']= {'France': ['blue'], 'Spain': ['red'], 'US': ['pink', 'green']} # change to list
# print('major_color:', brand['major_color:']['US']) # print last value for key

# print("len dict: ", len(brand)) # print len dict

# print("all keys here: ", brand.keys()) #print only keys

# # create new dict
# more_on_zara = {'name:': 'Zara', 'creation_date:': '1975', 'creator_name:': 'Amancio Ortega Gaona', 'number_stores:': '10 000', 'international_competitors:': ['Gap', 'H&M', 'Benetton', 'Desigual'], 'type_of_clothes:': 'men, women, children, home', 'major_color:': {'France': ['blue'], 'Spain': ['red'], 'US': ['pink, green']}, 'country_creation': 'Spain'}
# print(more_on_zara)

# ex 4: Disney Characters
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# 1
# disney_users_A = {} # add dict
# i = 0 # add iterator
# for m in users:
#     disney_users_A[m]=i 
#     i = i + 1 # every itertor + 1
# print(disney_users_A)

# 2
# 2.1
# disney_users_B = {} # add dict
# i = 0 # add iterator
# for m in users:
#     disney_users_B[i]=m # change key and value
#     i = i + 1 # every iterator + 1
# print(disney_users_B)

#2.2
# disney_users_B = {}
# for index, item in enumerate(users): # use item for element, enumerate for loop and autoindex
#     disney_users_B[index] = item
# print(disney_users_B)

# 3
# disney_users_C = {} # add dict
# i = 0 # add iterator
# for m in sorted(users): # use sorted for return elements like list
#     disney_users_C[m]=i 
#     i = i + 1
# print(disney_users_C)

# 4
# 4.1
# disney_user_i = {} # add dict
# i = 0
# for m in users:
#     if 'i' in m: # use iterator like letter in element
#         disney_user_i[m]=i
#         i = i + 1 # leave this line, becourse in other case the value for keys = 0
# print(disney_user_i)

# 4.2
# disney_user_mp = {} # add dict
# name_list = ['m', 'p'] # add new list for names
# i = 0 # use iterator
# for x in users: # need check names for m or p
#     for item in name_list: # item = elements in name_list
#         if item in x.lower(): # change register
#             disney_user_mp[i]=x
#             i = i + 1
# print(disney_user_mp)

# Set
my_fav_numbers = {3,5,7} # create
print(my_fav_numbers)

my_fav_numbers.add(1) # add1
my_fav_numbers.add(11) # add2
print(my_fav_numbers)

my_fav_numbers.remove(11) # del last character
print(my_fav_numbers)

friend_fav_numbers = {13,5,8}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) # concentrate
print(our_fav_numbers)


# Tuple
а_tuple = (5,) # defoult — tupple unchengable. i can use list for the task, but anyway it will be a new touple
print(а_tuple)
num_list = list(а_tuple)
print(num_list)
num_list.append(7)
print(num_list)
a_tuple = tuple(num_list)
print(a_tuple)

# List
bassket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(bassket)
bassket.remove('Banana') # del Banana
print(bassket)
item = bassket.pop(2) # del Blueberries, use another way
print(bassket)
bassket.append('Kiwi') # add Kiwi to the end
print(bassket)
bassket.insert(0,'Apples')
print(bassket) # there r a lot of Apples in bassket
bassket.clear() # clear bassket
print(bassket)

# Floats
list_w=[] # create a list with float numbers
list_int=[] # create a list for whole numbers
i=1.5 # create value for i
while i<=5: 
    list_w.append(i) 
    if i%1>0:
        list_int.append(i) # make a float
    else:
        list_int.append(int(i)) # make a whole
    i = i + 0.5 # create a step
print (list_w)

# For Loop
for number in range(21): # print all numbers
    print(number)

for number in range(2,21,2): # print element with even index
    print(number)

# While Loop
tries = 0
while True: # create unlimited loop before username isn't Stas
    name=input('enter your name: ')
    if name == 'Stas':
        break
    else: 
        tries +=1

# Fruits
fav_fruit=input('list with spaces your 3 favorite fruits: ')
fruit_list = fav_fruit.split(' ') #create list
print(fruit_list)
new=input('add 1 fruit: ')
if new in fav_fruit:
    print('You chose one of your favorite fruits! Enjoy!')
else :
    print('You chose a new fruit. I hope you enjoy')

# Pizza
counter = [] # for create a collection of elements (toppings)
while True:
    topping=input('please, add topping in tour pizza (if you finish, type quit): ')
    if topping == 'quit':
        print(f'this toppings {counter} in your pizza. The coast is {10+len(counter)*2.5$}')
        break # stop 
    else:
        counter.append(topping) #add 
        print(f'we will add {topping} to your pizza')

# Cinemax
counter = [] #for create a collection
while True:
    age = input('please, write your age (if you finish, type quit): ')
    if age == 'quit':
        print(counter)
        break
    else:
        counter.append(age) # add a collection

counter_a = 0
while True:
    age_a = input('please, write your age (if you finish, type quit): ')
    if age_a == 'quit':
        print(counter_a)
        break
    age_a = int(age_a)
    if age_a >= 12:
        counter_a = counter_a + 15 # add to counter
    elif 3 <= age_a < 12:
        counter_a = counter_a + 10
    else:
        counter_a = counter_a + 0
print(f"{counter_a}$")

age = 0
teens = []
ok_list = []
while True:
    teens=input('please, write your name (if you finish, type quit): ')
    print(teens)
    if teens == 'quit':
        break
    else:
        for name in teens:
            age=int(input('please, write your age: ')) # ask every teen about age
    if 16 <= age <= 21:
        ok_list.append(name) # add teen with correct age
print(f'teens right age:', ok_list)

# Sandwich_1
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

for i in sandwich_orders:
     finished_sandwiches.append(i) # add every sandwich to list
for i in finished_sandwiches:
    print(f"I made your {i}")


# Sandwich_2
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
print('The deli has run out of pastrami')
del_sandwich="Pastrami sandwich"

while del_sandwich in sandwich_orders:
    sandwich_orders.remove(del_sandwich) # del
print("actual menu :", sandwich_orders)
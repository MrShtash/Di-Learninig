# 1 Cat's
# class Cat:
#     cats =[] # way2 to create class

#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
#         Cat.cats.append(self) # way2

#     # dunder — double underscore / magic methods
#     def __str__(self) -> str: 
#         return self.name

# cat_1 = Cat('Tom', 3)
# cat_2 = Cat('Bread', 8)
# cat_3 = Cat('Grey', 1)

# # print(cat_1.name, cat_1.age)
# # print(cat_2.name, cat_2.age)
# # print(cat_3.name, cat_3.age)

# def oldest_cat(cat_list: list) -> Cat:

# # def oldest_cat(*cats) -> Cat:
#     # oldest = max(cats, key=lambda cat: cat.age)
#     # return oldest

#     oldest = cat_list[0]
#     for cat in cat_list:
#         if cat.age > oldest.age:
#             oldest = cat
    
#     return oldest

# # cats = [cat_1, cat_2, cat_3] # way1 to create class
# cats = Cat.cats # w2
# oldest = oldest_cat(cats)
# # print(oldest.name) # w1 and w2
# print(f' the oldest cat is {oldest} and is {oldest.age} years old') # coz dunder

# 2 Dogs
# class Dog:

#     dogs = []

#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height
#         Dog.dogs.append(self)

#     def bark(self):
#         print(f'{self.name} goes WOOF!')

#     def jump(self):
#         jump_height = (self.height * 2)
#         print(f'{self.name} jumps {jump_height} cm high!')

# dog_1 = Dog('Buddy', 150)
# # dog_1.bark()
# # dog_1.jump()

# davis_dog = Dog('Rex', 50)
# # print(f'here r the {davis_dog.name} and is {davis_dog.height} cm')
# # davis_dog.bark()
# # davis_dog.jump()

# sarahs_dog = Dog('Teacup', 20)
# # print(f'here r the {sarahs_dog.name} and is {sarahs_dog.height} cm')
# # sarahs_dog.bark()
# # sarahs_dog.jump()

# def heighest_dog(dog_list: list) -> Dog:
#     heighest = dog_list[0]
#     for dog in dog_list:
#         if dog.height > heighest.height:
#             heighest = dog
        
#     return heighest

# dogs = Dog.dogs
# heighest = heighest_dog(dogs)
# print(heighest.name)

# 3  Who’s The Song Producer?
# class Song:

#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway = Song(["There's a lady who's sure",
#                     "all that glitters is gold",
#                     "and she's buying a stairway to heaven"])

# stairway.sing_me_a_song()

# 4 Afternoon At the Zoo
class Zoo:
    
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animsls(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.sort_animals=[[]] # add new list for sorted by 1st letter animals 
        self.animals.sort()
        let=0 # add new variable for new list
        for i, m in enumerate(self.animals): # i — variable for animal1, animal2, ..., m — variable for 1st letter in animal name
            if m[0]!= self.animals[(i-1) if i>0 else 0][0]: # check 1st letter in animal name and after first animal go on 
                let+=1 # add new underlist 
                self.sort_animals.append([])
            self.sort_animals[let].append(m)
        print (self.sort_animals)
        
    def get_groups(self):
        print("group:")
        list(map(print, self.sort_animals))

ramatgamzoo = Zoo('RamatGanZoo')
ramatgamzoo.add_animal('shark')
ramatgamzoo.add_animal('monkey')
ramatgamzoo.add_animal('lion')
ramatgamzoo.add_animal('bear')
ramatgamzoo.add_animal('crockodile')
ramatgamzoo.add_animal('eagle')
ramatgamzoo.add_animal('snake')
ramatgamzoo.sell_animal('lion')
ramatgamzoo.get_animsls()
ramatgamzoo.sort_animals()
ramatgamzoo.get_groups()

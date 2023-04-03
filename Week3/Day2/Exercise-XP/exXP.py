# 1 Home pets
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# b = Bengal('Be', 5) #create a Bengal cat
# b.sing('r')

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# c = Chartreux('Cha', 4) # create a Charteux cat
# c.sing('mr')
    
# class Siamse(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# s = Siamse('Si', 3) # create a Siamse cat
# s.sing('br')

# all_cats = [b, c, s] # create a list, don't use form "_.name", coz in def_walk i can't see animal, coz i type only name, and a cat=name,age
# for i in all_cats:
#     print(i.name) # want to see list
# Sarahs_pets = Pets(all_cats) # sreate a Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Sarahs_pets.walk()

# 2 Dogs
class Dog():
    def __init__(self, name: str, age: int, weight: int):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f'{self.name} bark!')

    def run_speed(self):
        run_speed = (self.weight/self.age * 10)
        print(f'{self.name} run with speed {run_speed}')
        return run_speed # coz fight ask a result run_speed method

    def fight(self, other_dog): # other_dog  = any dog
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            print(f'{self.name} win!')
        else:
            print(f'{other_dog.name} win!')

# d1 = Dog('Buddy', 5, 30)
# d1.bark()
# # d1.run_speed()

# d2 = Dog('Shef', 8, 60)
# d2.bark()
# # d2.run_speed()

# d3 = Dog('Sausage', 3, 15)
# d3.bark()
# d3.run_speed()

# d1.fight(d2)
# 3 Home Dogs
from exXP import Dog

class PetDog(Dog):

    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        self.bark()

    def play(self, *args):
        dog_list=[]
        for d in args:
            dog_list.append(d.name)
        print(f'{self.name} and {dog_list} are playing together')

    # def play(self, *args):
    #     my_dogs = [n.name for n in args]
    #     my_dogs.append(self.name)
    #     my_dogs=(', ').join(my_dogs)
    #     print(f'{my_dogs} all play together')

    def do_a_trick(self):
        if self.trained:
            print(f'{self.name} does a barrel roll')
            print(f'{self.name} stands on his back legs')
            print(f'{self.name} shakes your hand')
            print(f'{self.name} plays dead')

# if __name__ == 'main':
d1 = PetDog('Buddy', 5, 30)
d2 = PetDog('Shef', 8, 60)
d3 = PetDog('Sausage', 3, 15)

d1.train()
d1.play(d2, d3)
d1.do_a_trick()
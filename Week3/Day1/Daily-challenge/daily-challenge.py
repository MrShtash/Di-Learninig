class Farm:

    animals = {}

    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}

    def add_animal(self, animal, amount = 1):
        if animal not in self.animals.keys():
            self.animals[animal] = amount
        else:
            self.animals[animal] += amount

    def get_animal_types(self):
        return sorted(list(self.animals.keys()))

    def get_info(self):
        print(f'McDonald’s farm has {macdonald.get_animal_types()}')

macdonald = Farm('McDonald')
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.animals)
print(macdonald.get_animal_types())
print(macdonald.get_info())



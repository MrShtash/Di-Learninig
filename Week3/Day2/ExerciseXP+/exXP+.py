# 1 Fam
class Family():
    def __init__(self):
        self.members_key = ['self', 'name', 'age', 'gender', 'is_child']
        self.members = [{'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}]
        self.last_name = 'Jackson'

    def born(self, **kwargs): #add new member
        new_mf = dict(m for m in kwargs.items())
        if "name" in new_mf.keys():
            print("Congrats with a new member of yo fam: ", new_mf['name'])
            self.members.append(new_mf)
            print(self.members)
        else:
            print('yo have no new member in yo fam')

    def is_18 (self, name):
        return ([n['age'] for n in self.members if n['name'] == name][0] > 18) # it's a condition, it's ok to return a val
    
    def family_presentation(self):
        print(f'members of {self.last_name}: ')
        for p in self.members:
            print(p['name'])

k=Family()
k.born(name = 'Jacson', age = 5, gender='male')
print(k.is_18('Sarah')) # check, is Sarah is older than 18 or not
k.family_presentation()

# 2 Thelncredibles Fam
class TheIncredibles(Family):
    def __init__(self):
        super().__init__()
        self.members = [{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}]
        
    def use_power(self, name):
        if self.is_18(name):
            d=[n['power'] for n in self.members if n['name'] == name]
            print([n['power'] for n in self.members if n['name'] == name][0])

    def incredible_presentation(self):
        super().family_presentation()
        print(f'members of {self.last_name}: ')
        for p in self.members:
            print(f"{p['name']} + {p['power']}")

    def born(self, **kwargs):
        new_mf = dict(m for m in kwargs.items())
        if "name" in new_mf.keys():
            print("Congrats with a new member of yo fam: ", new_mf['name'])
            self.members.append(new_mf)
            print(self.members)
        else:
            print('yo have no new member in yo fam')

b=TheIncredibles()
b.use_power('Michael') # see soper skill
b.incredible_presentation() # see name and super skills
b.born(name = 'Baby Jack', power = 'Unknown Power')
b.incredible_presentation()
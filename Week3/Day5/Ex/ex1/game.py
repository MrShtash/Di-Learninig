import random

class Game():
    def __init__(self) -> None:
        pass

    def get_user_item(self): # ask to choose an item
        choice_u = ''
        while choice_u not in ['r', 'p', 's']: # ask while answer == item
            choice_u = input("Select (r)ock (p)aper (s)cissors: ")
        return choice_u

    def get_computer_item(self): # random choise for computer
        list_1 = ['r', 'p', 's']
        return random.choice(list_1)

    def get_game_result(self, user_item, computer_item):
        a = user_item + computer_item 
        if user_item == computer_item:
            return 'draw'
        else:
            if a == 'rp' or a == 'sr' or a == 'ps': # paper higher than rock, rock higher than scissor, sc higher than paper
                return 'loss'
            else:
                return 'win'

    def play(self):
        user_item = self.get_user_item() # take user weapon
        computer_item = self.get_computer_item() # take comp weapon
        result = self.get_game_result(user_item, computer_item) # check result after compare
        print(f"You selected {user_item}. The computer selected {computer_item}. The result is {result}")
        return result
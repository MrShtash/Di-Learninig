print('Welcome to TicTacToe!')
# add playboard
cell = [
    1,2,3,
    4,5,6,
    7,8,9
]

# To display the Tic Tac Toe board
def display_board():
    print('*********')
    print('*' + ' ' + str(cell[0]) + '|' + str(cell[1]) + '|' + str(cell[2]) + ' ' + '*')
    print('---------')
    print('*' + ' ' + str(cell[3]) + '|' + str(cell[4]) + '|' + str(cell[5]) + ' ' + '*')
    print('---------')
    print('*' + ' ' + str(cell[6]) + '|' + str(cell[7]) + '|' + str(cell[8]) + ' ' + '*')
    print('*********')
display_board()

def check_win(): # loop until tie, check winner
    if cell[0] == cell[1] == cell[2] == ('X'): # for row X
        print((f'Player X - flowes victory!'))
        return True
    elif cell[3] == cell[4] == cell[5] == ('X'):
        print((f'Player X - flowes victory!'))
        return True
    elif cell[6] == cell[7] == cell[8] == ('X'):
        print((f'Player X - flowes victory!'))
        return True
    elif cell[0] == cell[1] == cell[2] == ('O'): # for row O
        print((f'Player O - flowes victory!'))
        return True
    elif cell[3] == cell[4] == cell[5] == ('O'):
        print((f'Player O - flowes victory!'))
        return True
    elif cell[6] == cell[7] == cell[8] == ('O'):
        print((f'Player O - flowes victory!'))
        return True
    elif cell[0] == cell[3] == cell[6] == ('X'): # for column X
        print((f'Player X - flowes victory!'))
        return True
    elif cell[1] == cell[4] == cell[7] == ('X'):
        print((f'Player X - flowes victory!'))
        return True
    elif cell[2] == cell[5] == cell[8] == ('X'):
        print((f'Player X - flowes victory!'))
        return True
    elif cell[0] == cell[3] == cell[6] == ('O'): # for column O
            print((f'Player O - flowes victory!'))
            return True
    elif cell[1] == cell[4] == cell[7] == ('O'):
        print((f'Player O - flowes victory!'))
        return True
    elif cell[2] == cell[5] == cell[8] == ('O'):
        print((f'Player O - flowes victory!'))
        return True
    elif cell[0] == cell[4] == cell[8] == ('X'): # for diagonal X
        print((f'Player X - flowes victory!'))
        return True
    elif cell[2] == cell[4] == cell[6] == ('X'):
        print((f'Player X - flowes victory!'))
        return True
    elif cell[0] == cell[4] == cell[8] == ('O'): # for diagonal O
        print((f'Player O - flowes victory!'))
        return True
    elif cell[2] == cell[4] == cell[6] == ('O'):
        print((f'Player O - flowes victory!'))
        return True
    elif  all([cell[i] in ('X','O') for i in range(9)]): # for tie - if all cell are X or O
        print((f'Tie, ha-ha-ha!'))
        return True
    return False
print(check_win())

# To get the position from the player
def player_input():
    display_board()
    # player_1= input(f'player X, please type cell number to put figure X inside: ')
    # if player_1 == ('1'):
    #     cell[0] = ('X')
    # elif player_1 == ('2'):
    #     cell[1] = ('X')
    # elif player_1 == ('3'):
    #     cell[2] = ('X')
    # elif player_1 == ('4'):
    #     cell[3] = ('X')
    # elif player_1 == ('5'):
    #     cell[4] = ('X')
    # elif player_1 == ('6'):
    #     cell[5] = ('X')
    # elif player_1 == ('7'):
    #     cell[6] = ('X')
    # elif player_1 == ('8'):
    #     cell[7] = ('X')
    # elif player_1 == ('9'):
    #     cell[8] = ('X')
    # display_board()
while True:
    player_1 = input(f'player X, please type cell number to put figure X inside: ')
    cell[int(player_1) - 1] = ('X') # cell step == index
    display_board()
    if check_win(): # check winner
        break

    player_2 = input(f'player O, please type cell number to put figure O inside: ')
    cell[int(player_2) - 1] = ('O')
    display_board()
    if check_win():
        break


# The main function, which calls all the functions created above
def play():
    while True:
        player_input()
        display_board
        if check_win(): # end of the loop
            break
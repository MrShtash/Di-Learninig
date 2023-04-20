from psql_python_exXP import *

# def show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to choose an item. Call the appropriate function that matches the user’s input.
def show_user_menu():
        print('MENU')
        print('(a) Add an item')
        print('(d) Delete')
        print('(v) View the menu')
        print('(x) Exit')
# show_user_menu()

# load_manager() - this function should create a new MenuItem instance.
def load_manager():
    item_name = input('input name: ')
    item_price = input('input price: ')
    # item_name = print('input name: ')
    # item_price = print('input price: ')
    # item_name = ('input name: ')
    # item_price = ('input price: ')
    return MenuItem(item_name, item_price)
# load_manager()

# add_item_to_menu() - this will ask the user to input the item’s name and price. It will not interact with the menu itself, but simply call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.
def add_item_to_menu():
    # item_name = input('input name: ')
    # item_price = input('input price: ')
    # def load_manager():
    # # item_name = print('input name: ')
    # # item_price = print('input price: ')
    #     item_name = ('input name: ')
    #     item_price = ('input price: ')
    #     return MenuItem(item_name, item_price)
    # load_manager()
    new_item = load_manager()
    if new_item.save():
         print('add successful')
    else:
         print('couldnt add') 
# add_item_to_menu()

# remove_item_from_menu() - this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. The function should not interact with the menu itself, but simply call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def remove_item_to_menu():
    item_name = input('type what u want to delete: ')
    if MenuItem.item_name == item_name:
        MenuItem.item_name.delete()
        print('{item_name} delete successful')
    else:
        print('couldnt remove')
remove_item_to_menu()

# show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu():
    menu_items = MenuItem.all()
    print(menu_items)
# show_restaurant_menu()

# When the user chooses to exit the program, display the restaurant menu and exit the program.
# def main():
#     show_user_menu()
#     user_input = input('Enter your choice: ')
#     if user_input == 'a':
#         add_item_to_menu()
#     elif user_input == 'r':
#         remove_item_from_menu()
#     elif user_input == 's':
#         show_restaurant_menu()
#     else:
#         break

# main()
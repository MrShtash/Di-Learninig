# condition 1 - sorted array / list
# condition 2 - value to compare to

# sorted_array = list(range(1000))
# value_to_search = 1500

# right = len(sorted_array)
# left = 0
# middle = sorted_array[len(sorted_array) // 2]
# print(middle)

def binary_search(array, value_to_search):
    middle = array[len(array) // 2]
    right = len(array)
    left = 0

    while True:
        if middle == value_to_search:
            print(f"FOUND SEARCH VALUE - {value_to_search}!")
            break

        elif middle < value_to_search:
            left = middle
            middle = (left + right) // 2
        elif middle > value_to_search:
            right = middle
            middle = (left + right) // 2
        else:
            print('NO SUCH VALUE')
            break

# print()
some_array = list(range(1000))
value = 50

binary_search(some_array, value)
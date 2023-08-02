# condition 1 - sorted array / list
# condition 2 - value to compare to

sorted_array = list(range(1000))
value_to_search = 2000

right = len(sorted_array)
left = 0
middle = sorted_array[len(sorted_array) // 2]
# print(middle)

if middle == value_to_search:
    print(f"FOUND SEARCH VALUE - {value_to_search}!")
elif middle < value_to_search:
    left = middle
    middle = (left + right) // 2
elif middle > value_to_search:
    right = middle
    middle = (left + right) // 2
else:
    print('NO SUCH VALUE')

print()
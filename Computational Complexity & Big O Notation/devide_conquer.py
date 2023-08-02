# array = [2, 4, 6, 8, 10]

# left = [2] [4] right = [6] [8] [10]

def sum_array(array):
    if len(array) == 1:
        return array[0]
    else: # [2, 4] -> [2] [4]
        middle = len(array) // 2
        left_sum = sum_array(array[:middle])
        right_sum = sum_array(array[middle:])
        return left_sum + right_sum
    
array = [2, 4, 6, 8, 10]
print(sum_array(array))
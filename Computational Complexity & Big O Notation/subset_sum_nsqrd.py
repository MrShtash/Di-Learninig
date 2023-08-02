# o(n^2)
def subsetsum(numbers: list, target: int) -> bool:
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i]+numbers[j]== target:
                print('true:', numbers[i], numbers[j])
                return True
    print('False')
    return False

nums = [12, -7, 20, 1, 4, -10, -1]
subsetsum(nums, 1) # false
subsetsum(nums, 2) # true: 12, -10
subsetsum(nums, 3) # true: 4, -1
subsetsum(nums, 4) # False
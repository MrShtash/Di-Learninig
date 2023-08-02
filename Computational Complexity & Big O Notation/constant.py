# o(2)
## o(c) -> (c - constant) - great 
## o(1) or o(c) - example - doing 1 operation or return data structure. getting/setting el in dict
def constant_algo(items: list): # constant coz always do 2 operations
    result = items[0] * items[0] #1
    print(result) #2

constant_algo([1,2,3])

# big0 -> 1
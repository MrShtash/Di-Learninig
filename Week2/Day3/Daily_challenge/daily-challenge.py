#1.1
# word = input('please, enter your word: ')
# print(word)
# word_dict = {}
# i = 0
# for m in word:
#     if m in word_dict: # if letter in list
#         b = word_dict[m]
#         b.append(i)
#         word_dict[m] = b
#     else: # if we have no letter in list
#         word_dict[m] = [i] #make massive
#     i = i + 1
# print(word_dict)

# --- THIS IS NOT EXERCISE, I'M RTYING TO UNDERSTAND ---
# froggy
#    i    m    wd    b
# 6  0    f             
# 7            f0         
# 8                     
# 9  1           
# 10                 0
# 11                 0,1
# 12            f0,1    
# если ключа (буквы) нет в словаре, то нужно добавить в словарь массив с ее порядковым номером
# если буква есть, нужно добавить i к существующему значению 
# {'f': [0]} string - m n
# i=1
# 'f': [0], 'r': [1]
# 2
# {'f': [0], 'r': [1], 'o': [2],
# 3
# {'f': [0], 'r': [1], 'o': [2], 'g': [3]]
# 4
#
# s = "dodo"
# {"d":[0,2], "o":[1,3]}
#print s index
#
#



# ------


#1.2
# from collections import defaultdict # use defaultdict, its accept us to add in key (letter in word) the value, that we already have. we do it by append like list 
# word = input('please, enter your word: ') # ask to enter word
# print(word)

# letters_dict = defaultdict(list) # letter in dict -> list
# for index, letter in enumerate(word):
#     letters_dict[letter].append(index)

# print(dict(letters_dict))

# #2
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"
print(items_purchase)

goods = [] # add list for goods

sorted(items_purchase.items()) # sort by alphabet
sorted_items_purchase = dict(sorted(items_purchase.items())) # create new dict, already sorted
print(sorted_items_purchase)

wallet=int(wallet.replace('$',' ')) # for sort I change value wallet -> to int and del dollar sign
print(wallet)

for p in items_purchase.keys(): # for all keys values in dict ->
		items_purchase[p]=items_purchase[p].replace('$',' ') # -> do same thig (as for wallet) ->
		items_purchase[p]=int(items_purchase[p].replace(',','')) # ->  del ',' (coz it can't be reading by comp) and made an integer
print(items_purchase)

for p in items_purchase.keys(): # for all keys values ->
    if wallet-items_purchase[p]>=0: # -> check the difference between wallet and coast and if i have money after buying
        goods.append([p]) # -> add goods in list
        wallet-=items_purchase[p]
goods.sort()
if len(goods)== 0:
    print("Nothing")
else:
    print(goods)
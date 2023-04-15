# 1 Random Sentence Generator
# import random

# filename = 'words.txt'

# word_list = []

# def get_words_from_file(filename: str) -> set: #use set, coz in task we nwwd collection. func resieve textfile and we can take a set of words
#     with open(filename, 'r') as file: # open to read
#         lines = file.readlines() # read line by line

#         for line in lines:
#             words = line.strip('\n').split(" ") # we have list of lines, delete symbol \n, use split to ceparate lines into words and we right words in empty list
#             [word_list.append(word) for word in words]
    
#     return set(word_list) 

# words_set = get_words_from_file(filename) # from list, where we can find repeated words (in theory), we create a set (list unique elements)

# # print(words_set)

# ~~~~~TRY 1!!!! ~~~~~
# sent_list = []

# def main():
#     main_message = print(f'This program create a random sentense with your random length')
# def get_random_sentense():
#     q = int(input(f'please, enter the number of words for the sentence from 2 to 20: '))
#     try:
#         if q > 20 or q < 1:
#             print('You need a number from 2 to 20')
#     except ValueError:
#         print('You should type a number')
#     for i in range(q): # use len value
#         i = random.randint(1, len(word_list)) # use value from 1 to len equal
#         s = word_list[i] # create s = list with value i
#         sent_list.append(s) # append result in new empty list
#         r = str.join(' ', sent_list)
#     print(sent_list)
#     print(r.lower())

## ~~~~~TRY 2!!!! ~~~~~
# def get_random_sentense():
#     q = int(input(f'please, enter the number of words for the sentence from 2 to 20: '))
#     for i in range(q): # use len value
#         i = random.randint(1, len(word_list)) # use value from 1 to len equal
#         s = word_list[i] # create s = list with value i
#         sent_list.append(s) # append result in new empty list
#         r = str.join(' ', sent_list)
#     print(sent_list)
#     print(r.lower())

# def main():
#     main_message = print(f'This programm create a random sentense with your random length')
#     if q > 20 or q < 1:
#         print('You need a number from 2 to 20')
#     elif ValueError:
#         print('You should type a number')
#     else:
#         print(get_random_sentense)

import random

def get_words_from_file(filename: str) -> set: #use set, coz in task we nwwd collection. func resieve textfile and we can take a set of words
    word_set = set()
 
    with open(filename, 'r') as file: # open 2 read
        lines = file.readlines() # read line by line
 
        for line in lines:
            words = line.strip('\n').split(" ") # we have list of lines, delete symbol \n, use split to ceparate lines into words and we right words in empty list
            for word in words:
                word_set.add(word)
 
    return word_set

def get_random_sentense(word_set: set):

    sent_list = []
    
    q = int(input(f'please, enter the number of words for the sentence from 2 to 20: '))
 
    if not isinstance(q, int): # return bool, we check q — int (for future)
        print('You should type a number')
    elif q > 20 or q < 1: # and we check a q value
        print('You need a number from 2 to 20')
    else:
        for i in range(q): # use len value
            s = random.sample(list(word_set), 1)[0] # take 1 word from set q times, and add to empty list; take [0] from list 
            sent_list.append(s)
        r = ' '.join(sent_list)

        print(sent_list)
        print(r.lower())
 
def main():
    print(f'This program create a random sentense with your random length')

    filename = 'words.txt'

    words_set = get_words_from_file(filename)
    get_random_sentense(words_set)
 
main()

# 2 work with JSON
# import json

# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# jsn_str = json.loads(sampleJson) # load string 
# print(jsn_str['company']['employee']['payable']['salary']) # Access the nested “salary” key from the JSON-string above.

# jsn_str['company']['employee']['birth_date'] = '12/12/2021' # Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# print(jsn_str)

# sampleJson_1 = json.dumps(jsn_str, indent = 2, sort_keys=True)
# print (sampleJson_1)

# with open("exXP.json",'w') as file: # save dict 2 JSON file
#     json.dump(jsn_str, file, indent = 2)
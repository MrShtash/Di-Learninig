# 1
from collections import Counter # for count elements of our text

# text = "A good book would sometimes cost as much as a good house."
# text_2 = text.lower() # new variable. lower, coz (for example) A != a, and we need to check all words

# split_text = text_2.split() # ceparate for words
# split_text_list = list(split_text) # crate a list of ceparated words

# class Text():
#         split_text = text_2.split() 
#         Counter = Counter(split_text) # count each word split_text
#         most_common_w = Counter.most_common() # returns a list with the most frequent words
#         print(most_common_w)

#         def uniq_words():
#                 uniq_words_list = {} # create empty dict for uniq words in split_twxt
#                 for i in range(len(split_text)):
#                     if split_text[i] not in uniq_words_list:
#                         uniq_words_list[split_text[i]] = 1
#                     elif split_text_list[i] in uniq_words_list:
#                         uniq_words_list[split_text[i]] += 1

#                 uniq_words_list_sorted = dict(sorted(uniq_words_list.items(), key=lambda item: item[1], reverse=True)) # sorted words from most frequent to low
#                 print(uniq_words_list_sorted)

#                 uniq_words_list_output = [] # create list with all uniq words 
#                 uniq_words_list_output = list(uniq_words_list.keys()) # use only keys, coz key = word in dict
#                 print(uniq_words_list_output)
        
# Text.uniq_words()  

# 2
filename = 'the_stranger.txt' # use file from Lise GitHub

with open(filename, 'r') as file: # open file
    text = file.read()
    text_lines = file.readlines() # read line by line

def get_words_from_file(): # open file and read content
    with open(filename, 'r') as file:
        text_lines = file.readlines()
    return text_lines # return lines
# del any symbols, we want to save inly words
text = str(get_words_from_file()) # use variable, get_words_from_file — returns like string
text_1 = text.replace("\\n',", "") # change "\\n',"" to empty str and use variable for it
text_21 = text_1.replace("'", "") # change ' to empty str
text_2 = text_21.replace('\\n"', "") # change '\\n"' to empty str

split_text = text_2.split('\n') # create a list of ceparated words and we use separator \n
split_text_list = list(split_text) # create a list of ceparated words

class Text():
        split_text = text_2.split()
        Counter = Counter(split_text)
        most_common_w = Counter.most_common(5)
        print(most_common_w)

        def uniq_words():
                uniq_words_list = {}
                for i in range(len(split_text)):
                    if split_text[i] not in uniq_words_list:
                        uniq_words_list[split_text[i]] = 1
                    elif split_text_list[i] in uniq_words_list:
                        uniq_words_list[split_text[i]] += 1
                uniq_words_list_sorted = dict(sorted(uniq_words_list.items(), key=lambda item: item[1], reverse=True))
                print(uniq_words_list_sorted)
                uniq_words_list_output = []
                uniq_words_list_output = list(uniq_words_list.keys())
                print(uniq_words_list_output)
        
Text.uniq_words()
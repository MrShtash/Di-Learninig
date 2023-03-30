def sort_word(word_list: str): # create a func
    for i, word in enumerate(word_list): # for each index and each word
        word_list[i] = word.strip(' ') # clean all words in my list (del space)
    return sorted(word_list)

words = input('please, enter some words, separated by comma: ') #ask to enter words
words_list = words.split(',') # discript, that word separated by comma. now, programm see, that it is not letters, but wors

result = sort_word(words_list)
print(result)


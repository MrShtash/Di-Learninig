import anagram_checker

choice = '' 
word_check = anagram_checker.AnagramChecker()

while choice != '2':
    choice = input("""
This is an anagram checker
  **********************
      1. Type a word
      2. Exit
  **********************
    """)
    if choice == '1':
        word_ok = False
        while not word_ok:
            word = input('Type a word: ') 
            word_ok = word_check.is_valid_word(word)
        words = word_check.get_anagrams(word)
        if words:
            print(f'YOUR WORD: {word}\nthis is a valid English word.\nAnagrams for your word: {words}')
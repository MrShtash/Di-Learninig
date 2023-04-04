from translate import Translator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
translator = Translator(from_lang="french",to_lang="english")
# translator = Translator(to_lang="en")

en_words = []
for word in french_words:
    translation = translator.translate(word)
    en_words.append(translation)
    
# print(french_words)
# print(en_words)

x = dict(zip(french_words, en_words)) # to connect 2 lists
print(x)



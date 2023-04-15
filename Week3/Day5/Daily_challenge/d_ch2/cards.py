# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        pass

    def show(self):
        print('{} of {}'.format(self.value, self.suit))

class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self): # append all suits value to build
        for i in ["Spades", "Clubs", "Diamonds", "Hearts"]:
            for j in ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']:
                self.cards.append(Card(i, j))

    def show(self):
        for i in self.cards:
            i.show()

    def shuffle(self):
        for i in range(len(self.cards) -1, 0, -1):
            j = random.randint(0, i)
            self.cards[i], self.cards[j] = self.cards[j], self.cards[i]

    def deal(self): # del showing card
        i = self.cards.pop()
        return i
    
deck = Deck()
deck.shuffle()
card = deck.deal()
card.show()
print('-------------')
deck.show()
print(len(deck.cards))
card = deck.deal()
card.show()
print('-------------')
deck.show()
print(len(deck.cards))
card = deck.deal()
card.show()
print('-------------')
deck.show()
print(len(deck.cards))
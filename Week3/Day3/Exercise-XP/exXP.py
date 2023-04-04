# 1 Built-in func
# 1.1
# abs()
# x = -5.5
# abs_x = abs(x)
# print(abs_x)

# # int()
# int_x = int(x)
# print(int_x)

# # input()
# text = input('enter anything you want: ')
# print(text)

# 1.2
# class WOW:
#     """Here's a text"""

#     def oops(self):
#         pass

# print(WOW.__doc__)

# 2 Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

# str(c1) OK
    # def __str__(self) -> str:
    #     return str(f"{self.amount} {self.currency}s")
        
# int(c1) OK
    # def __int__(self) -> int:
    #     print (self.amount)

# repr(c1) *****
    # def __repr__(self):
    #     return repr(self)

# + (c1 + 5) OK
    # def __add__(self, num:int):
    #     self.num = num
    #     return self.amount + self.num

# + (c1 + c2) OK
    # def __add__(self, other_currency):
    #     return self.amount + other_currency.amount
    
# c1 OK
    # def __repr__(self):
    #     return (f"{self.amount} {self.currency}s")

# c1 += 5 OK
    # def __iadd__(self, other_num):
    #    self.amount += other_num
    #    return (f'{self.amount} {self.currency}')
        
# c1 += c2 OK
    # def __iadd__(self, other_currency):
    #     self.amount += other_currency.amount
    #     return (f'{self.amount} {self.currency}')  # updated self

# c1 + c3 OK
    # def __add__(self, other_currency):
    #     if self.currency == other_currency.currency:
    #         self.amount + other_currency.amount
    #     else:
    #         print(f'Cannot add between Currency type <dollar> and <shekel>')

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# str(c1)
# print(c1)
# int(c1)
# c1.__int__()
# repr(c1)
# print(c1.__repr__())
# + (c1 + 5)
# print(c1 + 5)
# + (c1 + c2)
# print(c1 + c2)
# c1
# print(c1)
# c1 += 5
# print(c1.__iadd__(5))
# c1 += c2
# print(c1)
# c1 + c3
# print(c1 + c3)
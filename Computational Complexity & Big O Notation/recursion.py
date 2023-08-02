# def factorial(n):
#     # base case / stopping condition
#     if n == 1:
#         return n
#     else:
#         # call the func again
#         return n + factorial(n-1) #recursive call
    
# print(factorial(5))

# # diging in:
# # call 1: 5 + factorial(4)
# # call 2: 5 + factorial(3)
# # call 3: 5 + factorial(2)
# # call 4: 5 + factorial(1)
# # call 5: n == 1 -> return n => 15

# # diging out:
# # call 5: n == 1 -> return n
# # call 4: 2 + 1 
# # call 3: 3 + 3
# # call 2: 4 + 6
# # call 1: 5 + 10 -> 15

# # EX
# books = ['book1', 'book2', 'book3', 'book4', 'book5'];

# # the arg to the next recursive func books[1:] - slice 1 to the end
# # stopping condition len(books) == 0

# def count_books(book_list):
#     # base condition
#     if len(book_list) == 0:
#         return 0
#     else:
#         return 1 + count_books(book_list[1:])
    
# # diging in:
# # call 1: 1 + count_books(['book2', 'book3', 'book4', 'book5'])
# # call 2: 1 + count_books(['book3', 'book4', 'book5'])
# # call 3: 1 + count_books(['book4', 'book5'])
# # call 4: 1 + count_books(['book5'])
# # call 5: 1 + count_books([])
# # call 6: len(book_list) == 0 -> 0

# # diging out:
# # call 6: len(book_list) == 0 -> return 0
# # call 5: 1 + 0
# # call 4: 1 + 1
# # call 3: 1 + 2
# # call 2: 1 + 3
# # call 1% 1 + 4 -> 5

# print(count_books(books))

# EX
# write recursion in Python func to find the sum of el in a list, func should return the sum
# input [2,4,5,6,7] output 24

# list_num = [2,4,5,6,7]
# def rec_sum(list_num):
#     if not list_num:
#         return 0
#     else:
#         return list_num[0] + rec_sum(list_num[1:])
# print(rec_sum(list_num))

# EX
# write rec func in Python to reverse a string, with slicing operations
# input 'Hello world!' output '!dlrow olleH'

# s = 'Hello world!'
# def rec_s(s):
#     if len(s) <= 1:
#         return s
#     else:
#         return s[-1] + rec_s(s[:-1])
# print(rec_s(s))

# or:

# to_reverse = 'Hello world!'
# def reverce_string(some_string: str) -> str:
#     if len(some_string) == 0:
#         return some_string
#     else:
#         # return reverce_string(some_string[1:]) + some_string[0]
#         return some_string[-1] + reverce_string(some_string[:-1])
# print(reverce_string(to_reverse))

# ello World! + H
# llo World! + e
# lo World! + l
# o World! + l
#  World! + o
# World! + ' '
# orld! + W
# rld! + o
# ld! + r
# d! + l
# ! + d
# ! 

# EX
# calc the power of a number, the func should take base and exponent as input and return the result
# input 2, 3 (i.e., 2^3) output 8

# def recursive_power(base, exponent):
#     if exponent == 0:
#         return 1
#     else:
#         return base * recursive_power(base, exponent - 1)
# base_number = 2
# exponent_value = 3
# print(recursive_power(base_number, exponent_value))

# Yossi:
# 2, 3
# 2 * power(2 ,2)
# 2 * power(2, 1)

def power(base, exponent):
    if exponent == 0:
        return 1
    else:
        return base * power(base, exponent -1)
print(power(2, 3))
    
# 2, 4
# 2 * power(2, 4) -> 2 * 8
# 2 * power(2, 3) -> 2 * 4
# 2 * power(2, 2) -> 2 * 2
# 2 * power(2, 1) -> 2 * 1
# 2 * power(2, 0) -> 1
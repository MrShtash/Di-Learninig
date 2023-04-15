import random
import string
import datetime
from faker import Faker

# from Faker import faker

# #1 
from func import additional as add

# print(add(5, 7))

# 2
# def num():
#     # self.number = number
#     test_number = int(input(f'please, type your number from 0 to 100: '))
#     # print(test_number)
#     ran_num = random.randint (0,100)
#     # print(ran_num)
#     if test_number == ran_num:
#         print(test_number)
#     # else:                         # check
#     #     print('unsucces')

# 3
# string1 = '' # create empty str
# content = string.ascii_letters # letters with different register, all alphabet
# for i in range(5): # need 5 letters
#     string1 += content[random.randint(0,len(content)-1)] # coz i have random str, i need 5 letters (not 1), thats why str = list and i add new letter while its = 5. (0,len(content)-1) — coz i have alphabet and i need take random letters
# print(string1)

# 4
# to_day = datetime.datetime.now()
# print(to_day)

# 5
# period = datetime.datetime(2023,1,1) - datetime.datetime.now()
# print(period)

# 6
# my_birth = datetime.datetime(1986,8,18)
# period = datetime.datetime.now() - my_birth
# print(period.seconds/60)

# 7
# to_day = datetime.datetime.now()
# print(to_day)
# Rosh_ha_shana_date = datetime.datetime(2023,9,16)
# print(Rosh_ha_shana_date)
# period = Rosh_ha_shana_date - to_day
# print(f'Rosh_ha_shana is in {period}')

# 8
# my_birth = datetime.datetime(1986,8,18)
# period = datetime.datetime.now() - my_birth
# print(period.seconds)
# age_mars = period.seconds * 11.862615
# print(age_mars)

# 9
fake = Faker()
user_list = []
for i in range(10):
    name=fake.name()
    addres=fake.address()
    language=fake.language_code()
    user_list.append({'name':name, 'addres':addres, 'language':language})
print (user_list)
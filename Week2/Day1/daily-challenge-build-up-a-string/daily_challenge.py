#num = input('enter your string')
#lengh = len(num)
#print(lengh)

#if lengh > 10:
#    print('string too long')
#if lengh < 10:
#    print('string not long enough')
#else:
#    print(f'{num[0]} , {num[-1]}')

# str = input('enter text')
# print(str)
# m = ""
# for s in str:
#    m+=s
#    print(m)

import random
x = list('developer')
random.shuffle(x)
result = ''.join(x)
print(result)
# First
result = []
number=int(input("Type a number: "))
length=int(input("Type a length: "))
b = int()

while b < length:
  result.append(number * (b+1)) # for mulriplication
  b = b + 1
  
print(''.jion(result)) # create a string

# Second
text=input("write a text: ")
list=list(text)
i = 0

while i < len(list) - 1: # work with word len, use index
    if list[i] == list[i+1]: # use index
        del list[i]
    else:
        i = i + 1

print(''.join(list)) #create a string
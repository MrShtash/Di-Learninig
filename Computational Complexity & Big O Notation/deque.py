from collections import deque

my_queue = deque(['one', 2, 'three', 4])

my_queue.pop() #remove last item from right o(1)
my_queue.popleft() # o(1) <- 

print(my_queue)

# A B C 
# A (analise) - pop
# B C
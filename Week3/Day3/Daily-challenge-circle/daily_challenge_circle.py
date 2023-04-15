# way 1
from math import pi
import turtle

class Circle:
    
    name = 'Circle'
    def __init__(self, radius):
         self.radius = radius
    def get_area(self):
         return pi*(self.radius**2) # f = p*R^2

circle5 = Circle(5)
circle6 = Circle(6)
circle7 = Circle(7)

circle_sum_r = circle5.radius + circle6.radius
circle_dif_r = circle5.radius > circle6.radius
circle_eq_r = circle5.radius == circle6.radius
circle_list = [circle7, circle5, circle6] 
circle_list = sorted(circle_list, key=lambda x: x.radius) # sort list
# sorted(circle_list, key=lambda x: x.radius)
for x in circle_list: # sort list and take only radius
     print(x.radius)
     
print(circle5.name)
print(circle5.radius)
print(circle6.radius)
print(circle7.radius)
print(circle5.get_area())
print(circle6.get_area())
print(circle7.get_area())
print(circle_sum_r)
print(circle_dif_r)
print(circle_eq_r)
# print(circle_list.sort)

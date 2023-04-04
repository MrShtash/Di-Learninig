from math import pi

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
circle_list = [circle7.radius, circle5.radius, circle6.radius]
circle_list.sort()
print(circle_list)


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



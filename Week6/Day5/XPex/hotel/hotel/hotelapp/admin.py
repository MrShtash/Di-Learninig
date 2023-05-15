from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Type)
admin.site.register(Size)
admin.site.register(Room)
admin.site.register(Review)
admin.site.register(Booking)
admin.site.register(ApartmentPhoto)
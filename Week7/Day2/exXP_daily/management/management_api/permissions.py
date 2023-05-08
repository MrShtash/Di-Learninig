# from rest_framework import permissions

# class IsAdmin(permissions.BasePermission):
#     def has_permission(self, request, view):
#         if request.user.username == 'admin':
#             return False
#         return True

#     # def has_object_permission(self, request, view, obj):

# class IsBen(permissions.BasePermission):
#     def has_object_permission(self, request, view, obj):
#         # print('object', obj)
#         if obj.title.lower() == 'test3' and request.user.username == 'ben':
#             return False
#         return True
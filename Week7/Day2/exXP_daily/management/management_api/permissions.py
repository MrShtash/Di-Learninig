from rest_framework import permissions

class IsDepartmentAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.username == 'admin':
            return True
        return False
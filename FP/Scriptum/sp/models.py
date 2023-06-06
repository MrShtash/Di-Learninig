from django.db import models
import datetime
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
User = get_user_model()
from django.db.models.signals import post_save
from django.dispatch import receiver
import asyncio
from tg_bot.bot import bot as tg_bot
from django.conf import settings

loop = asyncio.get_event_loop()

class Login (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.name}, {self.password}'
    
class Grade (models.Model):
    grade_type = models.CharField(max_length=100, blank=True, null=True)
    cost = models.DecimalField(max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f'{self.grade_type}, {self.cost}'

class Hour (models.Model):
    hour = models.IntegerField(default=0)
    grade_type = models.ForeignKey(Grade, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.hour}, {self.grade_type}'
    
# class templateWork (models.Model):
#     task = models.CharField(max_length=500, blank=True, null=True)
#     # specialist = models.ForeignKey(User, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.task}'

class Cash (models.Model):
    cash =  models.DecimalField(max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f'{self.cash}'
 
class Specialist (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, blank=True, null=True)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user}, {self.first_name}, {self.last_name} {self.email} {self.password} {self.grade}'

class Company (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    address = models.CharField(max_length=100, blank=True, null=True)
    contact = models.CharField(max_length=100, blank=True, null=True)
    deposit = models.ForeignKey(Cash, default = 0, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}, {self.specialist}, {self.address}, {self.contact}, {self.deposit}'

# class Company(models.Model):
#     name = models.CharField(max_length=100, blank=True, null=True)
#     specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
#     address = models.CharField(max_length=100, blank=True, null=True)
#     contact = models.CharField(max_length=100, blank=True, null=True)

#     def remaining_deposit(self):
#         total_paid_amount = self.deposit.aggregate(total=models.Sum('amount'))['total'] or 0
#         return total_paid_amount

#     def remaining_workload(self):
#         total_hours_worked = self.project_set.aggregate(total_hours=models.Sum('work__hour'))['total_hours'] or 0
#         return self.specialist.total_workload - total_hours_worked

#     def __str__(self):
#         return f'{self.name}, {self.specialist}, {self.address}, {self.contact}'

class Project (models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    date_start = models.DateTimeField(auto_now_add = True)
    deadline = models.DateField(blank = True)
    deposit = models.ForeignKey(Cash, default = 0, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}, {self.company}, {self.date_start}, {self.deadline}, {self.deposit}'

# class Project(models.Model):
#     name = models.CharField(max_length=100, blank=True, null=True)
#     company = models.ForeignKey(Company, on_delete=models.CASCADE)
#     date_start = models.DateTimeField(auto_now_add=True)
#     deadline = models.DateField(blank=True)

#     def remaining_deposit(self):
#         total_paid_amount = self.company.deposit.aggregate(total=models.Sum('amount'))['total'] or 0
#         return total_paid_amount

#     def remaining_hours(self):
#         total_hours_worked = self.work_set.aggregate(total_hours=models.Sum('hour'))['total_hours'] or 0
#         return self.company.specialist.total_workload - total_hours_worked

#     def __str__(self):
#         return f'{self.name}, {self.company}, {self.date_start}, {self.deadline}'

class Work (models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    details = models.CharField(max_length=1000, blank=True, null=True)
    hour = models.IntegerField(default=0)
    specialist = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add = True)
    date_completion = models.DateField(blank = True, null = True)
    deadline_date = models.DateField(blank = True)

    def __str__(self):
        return f'{self.title}, {self.details}, {self.hour}, {self.specialist}, {self.project}, {self.date_creation}, {self.date_completion}, {self.deadline_date}'
    


@receiver(post_save, sender=Project, dispatch_uid="send_tgmessage")
def send_tgmessage(sender, instance, created, **kwargs):
    if created:
        message = f'Hi, you have a new customer {instance.company.name}. They paid {instance.deposit} shekels. Dont forget to call them within 1 hour. Details are available on your CRM.'
        try:
            loop.run_until_complete(
                tg_bot.send_message(
                    chat_id=settings.MANAGER_CHAT_ID,
                    text=message,
                    parse_mode='html',
                    disable_web_page_preview=True,
                )
            )

        except Exception as e:
            print(f"error: {e}")
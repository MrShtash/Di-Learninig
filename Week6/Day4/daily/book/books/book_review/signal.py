from django.db.models.signals import post_save
from django.db.models import Avg, Count
from django.db.transaction import commit
from django.dispatch import receiver

from django.contrib.auth.models import User
from .models import BookReview, Book

@receiver(post_save, sender=BookReview)
def rating_calculate(sender, instance, created, **kwargs):
    print(f"Calculate rating FOR  - {instance}")
    if created:
        res = Book.objects.filter(pk=instance.book.pk).aggregate(
            avrg_raiting = Avg('bookreview__rating'),
            count_raiting= Count('bookreview__rating')            
        )
        b = Book.objects.get(pk=instance.book.pk)
        b.avr_rating = res['avrg_raiting']
        b.cnt_rating = res['count_raiting']
        b.save()
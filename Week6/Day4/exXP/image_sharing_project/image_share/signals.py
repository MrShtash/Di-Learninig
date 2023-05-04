from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile, Image

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    print(f"CREATING A PROFILE FOR USER - {instance}")
    if created:
        new_profile = Profile.objects.create(user=instance)
        print(f"CREATE PROFILE: {new_profile}")

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


@receiver(post_save, sender=Image)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        instance.user.profile.num_images += 1
        instance.user.profile.save()
from django.db import models
import datetime
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=200, blank=False, null=True, db_index=True)
    author = models.CharField(max_length=200, blank=False, null=True, db_index=True)
    published_date = models.DateField(null = True, blank=True)
    description = models.TextField(null = True, blank=True)
    page_count = models.IntegerField(null = True, blank=True)
    categories = models.CharField(max_length=200, blank=False, db_index=True, null = True)
    thumbnail_URL = models.URLField(null = True, blank=True)

    def __str__(self):
        return f'{self.title}, {self.author}, {self.published_date}, {self.description}, {self.page_count}, {self.categories}, {self.humbnail_URL}'
    
class BookReview(models.Model):
    associated_book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(null = True, blank=True)
    review_text = models.TextField(null = True, blank=True)

    def __str__(self):
        return f'{self.associated_book}, {self.user}, {self.rating}, {self.review_text}'
    

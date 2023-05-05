from django.db import models
import datetime
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=50, blank=False, db_index=True)
    author = models.CharField(max_length=50, blank=False, db_index=True)
    published_date = models.DateField(blank=True)
    description = models.TextField()
    page_count = models.IntegerField()
    categories = models.CharField(max_length=50, blank=False, db_index=True)
    humbnail_URL = models.URLField()

    def __str__(self):
        return f'{self.title}, {self.author}, {self.published_date}, {self.description}, {self.page_count}, {self.categories}, {self.humbnail_URL}'
    
class BookReview(models.Model):
    associated_book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='assotiated_book')
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='user')
    rating = models.IntegerField()
    review_text = models.TextField()

    def __str__(self):
        return f'{self.associated_book}, {self.user}, {self.rating}, {self.review_text}'
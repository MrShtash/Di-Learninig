# Generated by Django 4.2.1 on 2023-05-05 15:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=50)),
                ('author', models.CharField(db_index=True, max_length=50)),
                ('published_date', models.DateField(blank=True)),
                ('description', models.TextField()),
                ('page_count', models.IntegerField()),
                ('categories', models.CharField(db_index=True, max_length=50)),
                ('humbnail_URL', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='BookReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('review_text', models.TextField()),
                ('associated_book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assotiated_book', to='book_review.book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
# Generated by Django 4.2.1 on 2023-05-13 12:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book_review', '0003_alter_book_categories_alter_book_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='humbnail_URL',
            new_name='thumbnail_URL',
        ),
    ]

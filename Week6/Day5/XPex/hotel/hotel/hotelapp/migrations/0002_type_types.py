# Generated by Django 4.2.1 on 2023-05-15 12:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('hotelapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='type',
            name='types',
            field=models.CharField(default=django.utils.timezone.now, max_length=300),
            preserve_default=False,
        ),
    ]
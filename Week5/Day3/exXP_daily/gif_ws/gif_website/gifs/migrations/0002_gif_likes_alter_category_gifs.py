# Generated by Django 4.2 on 2023-04-28 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gifs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='gif',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='category',
            name='gifs',
            field=models.ManyToManyField(blank=True, related_name='categories', to='gifs.gif'),
        ),
    ]

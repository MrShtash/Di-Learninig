# Generated by Django 4.2.1 on 2023-06-01 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sp', '0002_cash_company_grade_hour_project_templatework_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grade',
            name='specialist_username',
        ),
    ]

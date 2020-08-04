# Generated by Django 3.1 on 2020-08-04 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_students'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='document',
        ),
        migrations.AddField(
            model_name='student',
            name='major',
            field=models.CharField(default='CS', max_length=20, verbose_name='Note'),
        ),
    ]

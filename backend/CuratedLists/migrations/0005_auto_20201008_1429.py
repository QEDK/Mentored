# Generated by Django 3.1.2 on 2020-10-08 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CuratedLists', '0004_auto_20201008_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='password',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='author',
            name='username',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]

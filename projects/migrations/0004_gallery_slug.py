# Generated by Django 2.0.2 on 2018-03-20 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_gallery_mockup'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
    ]

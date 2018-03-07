# Generated by Django 2.0.2 on 2018-03-07 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=254)),
                ('company', models.CharField(blank=True, max_length=150, null=True)),
                ('content', models.TextField()),
                ('budget', models.DecimalField(decimal_places=2, max_digits=99)),
                ('start_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]

# Generated by Django 2.0.2 on 2018-03-13 03:22

from django.db import migrations, models
import django.db.models.deletion
import team.utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('github', 'Github'), ('linkedin', 'Linkedin')], default='github', max_length=20)),
                ('url', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=80)),
                ('last_name', models.CharField(max_length=80)),
                ('title', models.CharField(max_length=250)),
                ('about', models.TextField(blank=True, null=True)),
                ('image1', models.ImageField(upload_to=team.utils.get_directory)),
                ('image2', models.ImageField(upload_to=team.utils.get_directory)),
            ],
        ),
        migrations.AddField(
            model_name='link',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='team.Member'),
        ),
    ]
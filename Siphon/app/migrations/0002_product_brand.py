# Generated by Django 4.2.3 on 2023-07-27 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.CharField(default='nll', max_length=100),
            preserve_default=False,
        ),
    ]
# Generated by Django 3.2.15 on 2023-05-06 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hcb', '0009_alter_doctor_field'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='bio',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='location',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='qualification',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]

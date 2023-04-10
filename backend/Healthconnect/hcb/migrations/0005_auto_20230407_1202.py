# Generated by Django 3.2.15 on 2023-04-07 11:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hcb', '0004_auto_20230407_1008'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='blood_type',
            new_name='blood_group',
        ),
        migrations.AddField(
            model_name='patient',
            name='marital_status',
            field=models.CharField(blank=True, choices=[('SINGLE', 'SINGLE'), ('MARRIED', 'MARRIED'), ('DIVORCED', 'DIVORCED')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='medical_history',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='state',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='doctors', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='patient',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='patients', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='patient',
            name='weight',
            field=models.FloatField(blank=True, null=True),
        ),
    ]

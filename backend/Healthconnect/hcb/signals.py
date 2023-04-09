from .models import User, Doctor, Patient
from django.db.models.signals import post_save,post_delete
from django.core.mail import send_mail
from django.conf import settings


def createProfile(sender, instance, created, **kwargs):
    if created:
        user = instance
        if user.role == 'PATIENT':
            Patient.objects.create(user=user)   
        if user.role == 'DOCTOR':
            Doctor.objects.create(user=user)   
        

def deleteProfile(sender, instance, created, **kwargs):
    print('create',created)
    if not created:
        user = instance
        if user.role == 'PATIENT':
            user.patient.delete()   
        if user.role == 'DOCTOR':
            user.doctor.delete()

post_save.connect(createProfile, sender=User)
post_delete.connect(deleteProfile, sender=User)
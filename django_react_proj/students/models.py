from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("registrationDate", auto_now_add=True)
    major = models.CharField("Note", max_length=20, default='CS')

    def __str__(self):
        return self.name
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('pk', 'name', 'email', 'phone', 'registrationDate', 'major')
    # The Meta class is important here because it defines the metadata information
    # that our model has (databases) and that must be converted to the Student class.
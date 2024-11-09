from rest_framework import serializers
from .models import stud

class StudSerilizer(serializers.ModelSerializer):
    class Meta:
        model = stud
        fields = ['id','sname','email']
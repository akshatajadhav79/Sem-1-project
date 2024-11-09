from django.db import models
from api.db_connection import db


# Create your models here.

user_collection = db['user']

class stud(models.Model):
    sname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    
from django.contrib import admin
from api.models import *
# Register your models here.
admin.site.register(stud)
class studAdmin(admin.ModelAdmin):
    list_display = ['id','sname','email']
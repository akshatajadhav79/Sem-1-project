from django.urls import path
from api.views import *

urlpatterns = [
    path('',index,name = "users"),
]
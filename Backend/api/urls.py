from django.urls import path
from api.views import *

urlpatterns = [
    path("api/users/", index, name="user-list"),
    path("api/user_data/",person,name="user_data")
]

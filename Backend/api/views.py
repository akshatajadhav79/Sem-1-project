from django.shortcuts import render
from .serializers import StudSerilizer
from rest_framework.generics import ListAPIView
from .models import user_collection
# Create your views here.

def index(request):
    
    # Fetch all users from the MongoDB collection
    users_cursor = user_collection.find()
    
    # Convert the cursor to a list
    users = list(users_cursor)
    context = {"users":users}
    return render(request,"index.html",context)

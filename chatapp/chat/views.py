# chat/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate
from django.contrib.auth.models import User  # Using Django's built-in User model
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import User  # Assuming you have a User model

from rest_framework.permissions import IsAuthenticated

class UserListView(APIView):

    def get(self, request):
        users = User.objects.all()
        user_data = [{"username": user.username} for user in users]
        return Response({"status": "success", "users": user_data})


# User signup view
def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print(form.data)
        if form.is_valid():
            user = form.save()  # Save the user and log them in
            auth_login(request, user)
            return redirect('chat_list')  # Redirect to chat list after signup
    else:
        form = UserCreationForm()  # Display the signup form

    return render(request, 'chat/signup.html', {'form': form})

# User login view
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()  # Get the authenticated user
            auth_login(request, user)  # Log the user inredirect('chat_list')  # Redirect to chat list
            return redirect('chat_list')  # Redirect to chat list after successful login
    else:
        form = AuthenticationForm()  # Display the login form

    return render(request, 'chat/login.html', {'form': form})

# Chat list view
def chat_list(request):
    users = User.objects.all()  # Get all users from the User model
    return render(request, 'chat/chat_list.html', {'users': users})

# Chat room view
def chat_room(request, room_name):
    return render(request, 'chat/chat_room.html', {'room_name': room_name})


# User login API
@csrf_exempt
def api_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        
        user = authenticate(username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return JsonResponse({'message': 'Login successful', 'status': 'success'})
        else:
            return JsonResponse({'message': 'Invalid credentials', 'status': 'error'})
    return JsonResponse({'message': 'Invalid request method', 'status': 'error'})

# User signup API
@csrf_exempt
def api_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        form = UserCreationForm(data={'username': username, 'password1': password, 'password2': password})
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return JsonResponse({'message': 'Signup successful', 'status': 'success'})
        else:
            return JsonResponse({'message': form.errors, 'status': 'error'})
    return JsonResponse({'message': 'Invalid request method', 'status': 'error'})

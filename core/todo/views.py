from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.


class TodoViewSets(viewsets.ModelViewSet):
    serializer_class = TodoSerializer

    def get_queryset(self, request):
        return Todo.objects.filter(user=request.user).select_related("user")

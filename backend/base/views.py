from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Restaurant
from .serializers import RestaurantSerializer

# Create your views here.
class RestaurantViewSet(ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class= RestaurantSerializer
    
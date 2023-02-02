from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from .filters import MyFilter
from .models import Restaurant
from .serializers import RestaurantSerializer


class RestaurantViewSet(ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = MyFilter
    search_fields = ['navn']

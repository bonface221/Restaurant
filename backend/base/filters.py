from django_filters.rest_framework import FilterSet
from django_filters import rest_framework
from .models import Restaurant

class MyFilter(FilterSet):
    poststed = rest_framework.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Restaurant
        fields = ['poststed']

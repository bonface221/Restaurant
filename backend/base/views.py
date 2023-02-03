from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from .filters import MyFilter
from .models import Restaurant
from .serializers import RestaurantSerializer
from .pagination import DefaultPagination


class RestaurantViewSet(ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = MyFilter
    OrderingFilter = ['id']
    pagination_class = DefaultPagination
    search_fields = ['navn']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        orgnummer = serializer.validated_data.get('orgnummer')
        res = Restaurant.objects.filter(orgnummer=orgnummer).exists()
        if res:
            instance = Restaurant.objects.get(orgnummer=orgnummer)
            serializer = self.get_serializer(
                instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)

            if getattr(instance, '_prefetched_objects_cache', None):
                # If 'prefetch_related' has been applied to a queryset, we need to
                # forcibly invalidate the prefetch cache on the instance.
                instance._prefetched_objects_cache = {}

            return Response(serializer.data)

        else:
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

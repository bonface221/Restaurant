from django.urls import path
from rest_framework.routers import SimpleRouter,DefaultRouter
from . import views

# URLConf

router = DefaultRouter()
router.register('restaurants',views.RestaurantViewSet)


urlpatterns =router.urls
# urlpatterns = [
#     path('hello/', views.say_hello)
# ]

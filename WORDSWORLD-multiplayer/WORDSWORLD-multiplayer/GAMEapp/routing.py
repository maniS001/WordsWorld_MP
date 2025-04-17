from django.urls import path
from .consumers import Consumers
websocket_urlpatterns = [
    path('ws/game/<room_name>', Consumers.as_asgi()),
] 


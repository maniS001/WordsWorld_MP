# asgi.py

import os
from django.core.asgi import get_asgi_application 
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WORDSWORLD.settings')
django.setup()
from GAMEapp.routing import websocket_urlpatterns

application = ProtocolTypeRouter({ 
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
})

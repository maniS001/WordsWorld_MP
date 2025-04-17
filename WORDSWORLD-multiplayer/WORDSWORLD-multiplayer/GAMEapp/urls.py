from django.urls import path
from . import views
# from . import routing

from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',views.Open_Game ,name='data'),
    path('get-data',views.get_data, name='get_data'),
    path("get-Answer",views.get_Answer,name='get_Answer'),
    path("result",views.result,name='result'),
    #multiplayer 
    path("multiplayer",views.Connect_Websocket,name='multiplayer')
]

urlpatterns =urlpatterns+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns =urlpatterns+ routing.websocket_urlpatterns
 
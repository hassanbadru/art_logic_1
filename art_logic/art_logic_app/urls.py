# from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/art_logic_app/', views.ArtLogicApp.as_view() ),
]

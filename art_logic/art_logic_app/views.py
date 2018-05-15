# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from art_logic_app.models import UserTask
from art_logic_app.serializers import UserTaskSerializer

from rest_framework import generics


# Create your views here.
class ArtLogicApp(generics.ListCreateAPIView):
    queryset = UserTask.objects.all()
    serializer_class = UserTaskSerializer

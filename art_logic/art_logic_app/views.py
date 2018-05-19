# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.views.generic import TemplateView, View, CreateView

from art_logic_app.models import UserTask
from art_logic_app.serializers import UserTaskSerializer

from art_logic_app.utils import encoder

from rest_framework import generics


import math


# Create your views here.
class ArtLogicAPI(generics.ListCreateAPIView):
    queryset = UserTask.objects.all()
    serializer_class = UserTaskSerializer

class ArtLogicApp(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ArtLogicApp, self).get_context_data()

        to_compute = self.request.GET.get('to_compute')
        decode = self.request.GET.get('decode')
        encode = self.request.GET.get('encode')
        print(to_compute)

        encode_operation = encode == "on"
        print(encode_operation)

        if encode_operation:
            print('Encoding')
            encoding_result = encoder(to_compute)
            context['encoding_result'] = encoding_result
        else:
            print('Decoding')
            # decoding_result = decoder(to_compute)


        # user_operation = UserOperation()
        # print(user_operation.encoder('0'))

        # encoded_value = encoder('8191')
        # print(encoded_value)

        # context['encode_operation'] = encode_operation
        # print(encoder('0'))

        return context


    # def post(self, *args, **kwargs):
    #
    #     to_compute = self.request.POST.get('to_compute')
    #     decode = self.request.POST.get('decode')
    #     encode = self.request.POST.get('encode')
    #     print(to_compute, encode, decode)
    #
    #     encode_operation = encode == "on"
    #     print(encode_operation)

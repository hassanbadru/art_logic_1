# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.template.loader import render_to_string

from rest_framework.response import Response

from django.views.generic import TemplateView, View, CreateView

from art_logic_app.models import UserAction
from art_logic_app.serializers import UserActionSerializer

from art_logic_app.myfunctions import encoder, decoder

from rest_framework import generics


import math

import os
from django.conf import settings


# Create your views here.
class ArtLogicAPI(generics.ListCreateAPIView):
    queryset = UserAction.objects.all()
    serializer_class = UserActionSerializer


class ArtLogicApp(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ArtLogicApp, self).get_context_data()

        # user_action = UserAction()

        if self.request.FILES.get('file_compute'):
            print("recognizes file input")
            file_compute = self.request.FILES['file_compute'].readlines()
            # print(file_compute)
            return redirect('art_logic')

        to_compute = self.request.GET.get('to_compute')

        if to_compute:
            decode = self.request.GET.get('decode')
            encode = self.request.GET.get('encode')
            # print(to_compute)

            encode_operation = encode == "on"
            # print(encode_operation)

            result = ''
            if encode_operation:
                # print('Encoding')
                encoded_result = encoder(to_compute)
                # context['encoding_result'] = encoding_result
                result = encoded_result
            else:
                # print('Decoding')
                decoded_result = decoder(to_compute)
                result = decoded_result

            context['result'] = str(result)

            #Add to database for REST API
            if encode_operation:
                operation_type = 'encoding'
            else:
                operation_type = 'decoding'

            # context['operation_type'] = operation_type

            user_action = UserAction(operation=operation_type, input=to_compute, result=result)
            # print(user_action.input)
            all_items = UserAction.objects.all()
            # print([i.pk for i in all_items])
            user_action.save()

        encoding_stream = ['6111', '340', '-2628', '-255', '7550']
        with open(os.path.join(settings.MEDIA_ROOT, 'ConvertedData.txt'), 'w') as f:
            f.write('ENCODED DATA: '+'\n')
            for x in encoding_stream:
                f.write(x + ' is encoded as ' + encoder(x) + '\n')
            f.close()

        decoding_stream = ['0A0A', '0029', '3F0F', '4400', '5E7F']
        with open(os.path.join(settings.MEDIA_ROOT, 'ConvertedData.txt'), 'a') as f:
            f.write('\n\n'+'DECODED DATA: '+'\n')
            for x in decoding_stream:
                # print(x)
                f.write(x + ' is decoded as ' + str(decoder(x)) + '\n')
            f.close()


        return context

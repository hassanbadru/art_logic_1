# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserTask(models.Model):
    type = models.CharField(max_length=100, default='D2H')
    value = models.CharField(max_length=100, default='8191')
    result = models.CharField(max_length=100, default='')

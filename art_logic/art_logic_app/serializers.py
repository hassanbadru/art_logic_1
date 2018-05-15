from rest_framework import serializers
from art_logic_app.models import UserTask

class UserTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTask
        fields = ('type', 'value', 'result')
        # fields = '__all__'

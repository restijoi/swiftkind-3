from rest_framework import serializers
from .models import Message


class ContactSerializer(serializers.ModelSerializer):
    """ inquiry serializers
    """
    class Meta:
        model = Message
        fields = ('id', 'name', 'email', 'content', 'budget', 'company', 'start_date')
from rest_framework import serializers
from .models import Member, Link


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = (
            'id',
            'name',
            'url',
        )


class MemberSerializer(serializers.ModelSerializer):
    """ member serializer
    """
    links = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = (
            'id',
            'first_name',
            'last_name',
            'title',
            'about',
            'image1',
            'image2',
            'links',
        )

    def get_links(self, obj):
        return LinkSerializer(
            Link.objects.filter(member=obj), many=True).data
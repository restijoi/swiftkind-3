from rest_framework import serializers
from .models import Project, Resource, Image, Stack


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ('id', 'name', 'url')


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image', 'is_cover')


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ('id', 'name')




class ProjectSerializer(serializers.ModelSerializer):
    """ project serializers
    """
    resources = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()
    stacks = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'subtitle',
            'tagline',
            'description',
            'stacks',
            'url',
            'year',

            'resources',
            'images',
            'stacks',
        )

    def get_resources(self, instance):
        return ResourceSerializer(
            Resource.objects.filter(project=instance), many=True).data

    def get_images(self, instance):
        return ImageSerializer(
            Image.objects.filter(project=instance), many=True).data

    def get_stacks(self, instance):
        return StackSerializer(
            Stack.objects.filter(project=instance), many=True).data
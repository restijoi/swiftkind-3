from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from django.shortcuts import get_object_or_404

from lib.db.query import Query
from .serializers import ProjectSerializer, GallerySerializer


class Projects(Query, ViewSet):
    """ projects
    """
    serializer_class = ProjectSerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(self.Qfilter(), many=True)
        return Response(serializer.data, status=200)


class Project(Query, ViewSet):
    """ project
    """
    serializer_class = ProjectSerializer

    def detail(self, *args, **kwargs):
        serializer = self.serializer_class(self.Qget(**kwargs))
        return Response(serializer.data, status=200)


class Galleries(Query, ViewSet):
    """ gallery list
    """
    serializer_class = GallerySerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(self.Qfilter(), many=True)
        return Response(serializer.data, status=200)


class Gallery(Query, ViewSet):
    """ project gallery
    """
    serializer_class = GallerySerializer

    def detail(self, *args, **kwargs):
        serializer = self.serializer_class(self.Qget(**kwargs))
        return Response(serializer.data, status=200)
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from django.shortcuts import get_object_or_404

from .serializers import ProjectSerializer


class Projects(ViewSet):
    """ projects
    """
    serializer_class = ProjectSerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(), many=True)

        return Response(serializer.data, status=200)


class Project(ViewSet):
    """ project
    """
    serializer_class = ProjectSerializer

    def detail(self, *args, **kwargs):
        serializer = self.serializer_class(get_object_or_404(
            self.serializer_class.Meta.model, id=kwargs.get('id')
        ))

        return Response(serializer.data, status=200)
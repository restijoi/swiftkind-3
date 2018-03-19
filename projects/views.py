from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import ProjectSerializer


class Projects(ViewSet):
    """ projects
    """
    serializer_class = ProjectSerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(), many=True)

        return Response(serializer.data, status=200)

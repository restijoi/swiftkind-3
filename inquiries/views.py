from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import ContactSerializer


class Inquiry(ViewSet):
    """ inquiry endpoint
    """
    serializer_class = ContactSerializer

    def create(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)
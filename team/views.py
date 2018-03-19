from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import MemberSerializer, FeedbackSerializer


class Team(ViewSet):
    """ team members
    """
    serializer_class = MemberSerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(), many=True)

        return Response(serializer.data, status=200)


class Feedback(ViewSet):
    """ feedback
    """
    serializer_class = FeedbackSerializer

    def list(self, *args, **kwargs):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(), many=True)

        return Response(serializer.data, status=200)
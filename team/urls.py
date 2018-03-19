from django.urls import path
from .views import Team, Feedback

urlpatterns = [
    path('', Team.as_view({
        'get': 'list',
    }), name="team"),

    path('feedback/', Feedback.as_view({
        'get': 'list',
    }), name="feedback"),
]
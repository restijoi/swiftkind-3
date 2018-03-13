from django.urls import path
from .views import Team

urlpatterns = [
    path('', Team.as_view({
        'get': 'list',
    }), name="team")
]
from django.urls import path
from .views import Projects, Project

urlpatterns = [
    path('', Projects.as_view({
        'get': 'list',
    }), name="projects"),

    path('<int:id>/', Project.as_view({
        'get': 'detail',
    }), name="project"),
]
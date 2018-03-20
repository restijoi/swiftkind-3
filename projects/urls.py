from django.urls import path
from .views import Projects, Project, Galleries, Gallery

urlpatterns = [
    path('', Projects.as_view({
        'get': 'list',
    }), name="projects"),

    path('<int:id>/', Project.as_view({
        'get': 'detail',
    }), name="project"),

    path('gallery/', Galleries.as_view({
        'get': 'list',
    }), name="galleries"),

    path('gallery/<str:slug>/', Gallery.as_view({
        'get': 'detail',
    }), name="gallery"),
]
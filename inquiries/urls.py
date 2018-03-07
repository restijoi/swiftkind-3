from django.urls import path
from .views import Inquiry


urlpatterns = [
    path('', Inquiry.as_view({
        'post': 'create',
    }), name="inquiries"),
]
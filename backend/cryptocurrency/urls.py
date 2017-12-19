from django.urls import path
from . import views

# path for the views

urlpatterns = [
    path('', views.index, name='index'),
]
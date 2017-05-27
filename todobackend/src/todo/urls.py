"""Router"""
from django.conf.urls import url, include
from todo import views
from rest_framework.routers import DefaultRouter

ROUTER = DefaultRouter(trailing_slash=False)
ROUTER.register(r'todos', views.TodoItemViewSet)

urlpatterns = [
    url(r'^', include(ROUTER.urls)),
]

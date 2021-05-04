from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('task-list/', views.taskList, name="task-list"),
    path('task-create/', views.taskCreate, name="task-create"),
    path('task-detail/<str:id>/', views.taskDetail, name='task-detail'),
    path('task-update/<str:id>/', views.taskUpdate, name='task-update'),
    path('task-delete/<str:id>/', views.taskDelete, name='task-delete'),
]
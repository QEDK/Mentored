"""mentored URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from CuratedLists import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/signin', views.signin, name='signin'),
    path('api/signin/', views.signin, name='signin'),
    path('api/signup', views.signup, name='signup'),
    path('api/signup/', views.signup, name='signup'),
    path('api/get_profile', views.get_profile, name='get_profile'),
    path('api/get_profile/', views.get_profile, name='get_profile'),
    path('api/get_topic', views.get_topic, name='get_topic'),
    path('api/get_topic/', views.get_topic, name='get_topic'),
    path('api/all_curations', views.all_curations, name='all_curations'),
    path('api/all_curations/', views.all_curations, name='all_curations'),
    path('api/all_mentors', views.all_mentors, name='all_mentors'),
    path('api/all_mentors/', views.all_mentors, name='all_mentors'),
    path('api/add_curation', views.add_curation, name='add_curation'),
    path('api/add_curation/', views.add_curation, name='add_curation'),
]

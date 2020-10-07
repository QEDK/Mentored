from django.contrib import admin
from .models import Author
from .models import List

admin.site.register(Author)
admin.site.register(List)
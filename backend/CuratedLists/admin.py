from django.contrib import admin
from .models import Author
from .models import Curation

admin.site.register(Author)
admin.site.register(Curation)

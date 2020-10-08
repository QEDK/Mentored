from django.conf import settings
from django.db import models
from django.utils import timezone
import uuid

class Author(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=100, unique=True)
    password = models.TextField()
    name = models.TextField()
    company = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)

    def saveAuthor(self):
        self.created_date = timezone.now()
        self.save()

class Curation(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    topic = models.CharField(max_length=200)
    data = models.JSONField(default=dict)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.topic
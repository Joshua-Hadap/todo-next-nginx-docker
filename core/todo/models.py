from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Todo(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

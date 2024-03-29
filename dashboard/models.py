from django.db import models

# Create your models here.
from django.db import models

class DataPoint(models.Model):
    value = models.FloatField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.value} at {self.date_created}"


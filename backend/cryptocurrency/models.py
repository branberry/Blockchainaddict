from django.db import models

# Create your models here.

class CardanoData(models.Model):
    price = models.FloatField(max_length=200)
    pub_date = models.DateTimeField('Date published')


from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    user_id = models.IntegerField()
    join_date = models.DateTimeField('date joined')

class UserCurrencies(models.Model):
    user_id = models.IntegerField()
    currency_name = models.CharField(max_length=200)
    currency_code = models.CharField(max_length=10)
    currency_amount = models.IntegerField()
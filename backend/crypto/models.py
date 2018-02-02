from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    user_id = models.IntegerField(primary_key=True)
    join_date = models.DateTimeField('date joined')

    def __str__(self):
        return self.user_name

class UserPortfolio(models.Model):
    portfolio_id = models.IntegerField(primary_key=True)
    user = models.ManyToManyField(User)
    currency_name = models.CharField(max_length=200)
    currency_code = models.CharField(max_length=10)
    currency_amount = models.FloatField()

    def __str__(self):
        return self.user_id
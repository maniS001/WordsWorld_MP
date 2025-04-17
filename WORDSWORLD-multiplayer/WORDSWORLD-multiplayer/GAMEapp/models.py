from django.db import models
from django.db.models.fields import IntegerField
from django.contrib.postgres.fields import ArrayField
class Quest_Ans(models.Model):
   question = models.CharField(max_length=512)
   answer = models.CharField(max_length=300)
   # answer_dummy = models.CharField(max_length=30)
   # nickname=models.CharField(max_length=30)
   # period=models.CharField(max_length=10)
   # nationality=models.CharField(max_length=20)
   # image=models.ImageField(upload_to='pics')
   # rank=IntegerField()
class RoomInfo(models.Model):
      gameId = models.CharField(max_length=20)
      userId = models.CharField(max_length=100)
      user_name = models.CharField(max_length=100) 
      user_points = models.IntegerField() 
      wins_Oncurrent_round= models.IntegerField() 
class Winorloss(models.Model):
      gameId = models.CharField(max_length=20)
      question = models.CharField(max_length=512) 
      win = models.CharField(max_length=100)
      

      
      
      # user_winorloss = models.CharField(max_length=300) 
      
      
      
# Create your models here.

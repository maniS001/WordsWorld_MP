from django.db import models
from django.db.models.fields import IntegerField
from django.contrib.postgres.fields import ArrayField
class Quest_Ans(models.Model):
   question = models.CharField(max_length=512)
   answer = models.CharField(max_length=300) 
   
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

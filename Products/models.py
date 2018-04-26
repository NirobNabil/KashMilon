from django.db import models

# Create your models here.
class product(models.Model):
    typeChoice = (
        ('male', 'male'),
        ('female', 'female'),
        ('baby', 'baby'),
    )
    collarChoice = (
        ('round', 'round'),
        ('enter collar name here', 'enter the same collar name here'),
        ('enter another collar name here', 'enter the same collar name here'),
        ('...', '...'),
        ('...', '...'),
        ('...', '...'),

    )
    materialChoice = (
        ('cotton', 'cotton'),
        ('enter material name here', 'enter the same material name here'),
        ('enter another material name here', 'enter the same material name here'),
        ('...', '...'),
        ('...', '...'),
        ('...', '...'),
    )

    code = models.CharField(max_length=30)
    img = models.ImageField(upload_to='productImages')
    type = models.CharField(max_length=10,
                            choices=typeChoice,
                            default='male')
    color = models.CharField(max_length=10)
    collar = models.CharField(max_length=10,
                              choices=collarChoice,
                              default='')
    material = models.CharField(max_length=15,
                                choices=materialChoice,
                                default='')
    totalViews = models.IntegerField




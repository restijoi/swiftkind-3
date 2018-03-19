from django.db import models
from .utils import get_directory


class Project(models.Model):
    """ project model
    """
    name = models.CharField(max_length=200)
    subtitle = models.TextField()
    tagline = models.TextField()
    description = models.TextField()

    stacks = models.ManyToManyField('Stack', blank=True)

    url = models.URLField(null=True, blank=True)
    year = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.name}"


class Resource(models.Model):
    """ project resources
    """
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return f"{self.name}"


class Image(models.Model):
    """ project image
    """
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_directory)
    is_cover = models.BooleanField(default=False)

    def __str__(self):
        return f"({self.project}) : {self.id}"


class Stack(models.Model):
    """ technology stack
    """
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"
from django.db import models
from django.utils.text import slugify

from .utils import get_directory, get_gallery_directory


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


class Gallery(models.Model):
    """ design gallery
    """
    name = models.CharField(max_length=250)
    slug = models.SlugField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date_designed = models.DateField(null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.date_designed})"

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.name)

        return super(Gallery, self).save(*args, **kwargs)


class Mockup(models.Model):
    """ design mockup
    """
    gallery = models.ForeignKey('Gallery', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_gallery_directory)
    date_uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"({self.gallery.name}) {self.date_uploaded}"
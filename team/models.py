from django.db import models
from .utils import get_directory



class Member(models.Model):
    """ team member
    """
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    title = models.CharField(max_length=250)
    about = models.TextField(null=True, blank=True)

    image1 = models.ImageField(upload_to=get_directory)
    image2 = models.ImageField(upload_to=get_directory)

    def __str__(self):
        return f"{self.full_name}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"


class Link(models.Model):
    """ external links
    """
    GITHUB = 'github'
    LINKEDIN = 'linkedin'
    LINKS = (
        (GITHUB, "Github"),
        (LINKEDIN, "Linkedin"),
    )

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, choices=LINKS, default=GITHUB)
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        return f"{self.member} ({self.name})"
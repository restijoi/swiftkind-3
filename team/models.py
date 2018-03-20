from django.db import models
#from django.contrib.postgres.fields import JSONField

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


class Feedback(models.Model):
    """ feedback
    """
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=250)

    content = models.TextField()

    def __str__(self):
        return f"{self.name} ({self.title})"


# class ContributionLog(models.Model):
#     """ contributions
#     """
#     GITHUB = 'github'
#     BITBUCKET = 'bitbucket'
#     GITLAB = 'gitlab'

#     source = models.CharField(max_length=50, choices=SOURCES, default=GITHUB)
#     content = JSONField()
#     date_created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"({self.source}) {self.date_created}"
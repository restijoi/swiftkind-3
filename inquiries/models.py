from django.db import models


class Message(models.Model):
    """ client inquiry
    """
    name = models.CharField(max_length=150)
    email = models.EmailField()
    company = models.CharField(max_length=150, null=True, blank=True)
    content = models.TextField()
    budget = models.DecimalField(max_digits=99, decimal_places=2)
    start_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}"

from django.contrib import admin
from .models import Message


class MessageAdmin(admin.ModelAdmin):
    model = Message
    list_display = ('name', 'email', 'budget', 'content', 'company', 'start_date')


admin.site.register(Message, MessageAdmin)
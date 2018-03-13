from django.contrib import admin
from .models import Member, Link


class LinkAdmin(admin.StackedInline):
    model = Link
    extra = 1


class MemberAdmin(admin.ModelAdmin):
    model = Member
    list_display = ('first_name', 'last_name', 'title', 'image1', 'image2')
    inlines = (LinkAdmin,)


admin.site.register(Member, MemberAdmin)
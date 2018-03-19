from django.contrib import admin
from .models import Member, Link, Feedback


class LinkAdmin(admin.StackedInline):
    model = Link
    extra = 1


class MemberAdmin(admin.ModelAdmin):
    model = Member
    list_display = ('first_name', 'last_name', 'title', 'image1', 'image2')
    inlines = (LinkAdmin,)


class FeedbackAdmin(admin.ModelAdmin):
    model = Feedback
    list_display = ('name', 'title', 'content')


admin.site.register(Member, MemberAdmin)
admin.site.register(Feedback, FeedbackAdmin)
from django.contrib import admin
from .models import Project, Resource, Image, Stack


class ResourceAdmin(admin.StackedInline):
    model = Resource
    extra = 1


class ImageAdmin(admin.StackedInline):
    model = Image
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = (
        'name',
        'subtitle',
        'tagline',
        'url',
        'year',
    )

    inlines = (ImageAdmin, ResourceAdmin)
    filter_horizontal = ('stacks',)


class StackAdmin(admin.ModelAdmin):
    model = Stack


admin.site.register(Project, ProjectAdmin)
admin.site.register(Stack, StackAdmin)
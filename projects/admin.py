from django.contrib import admin
from .models import Project, Resource, Image, Stack, Mockup, Gallery


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


class MockupAdmin(admin.StackedInline):
    model = Mockup
    extra = 1


class GalleryAdmin(admin.ModelAdmin):
    model = Gallery
    list_display = (
        'name',
        'date_designed',
    )

    inlines = (MockupAdmin,)


admin.site.register(Project, ProjectAdmin)
admin.site.register(Stack, StackAdmin)
admin.site.register(Gallery, GalleryAdmin)
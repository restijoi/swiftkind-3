def get_directory(self, filename):
    """ directory of project images
    """
    return f"projects/{self.project.id}/{filename}"


def get_gallery_directory(self, filename):
    """ directory of gallery images
    """
    return f"gallery/{self.gallery.id}/{filename}"
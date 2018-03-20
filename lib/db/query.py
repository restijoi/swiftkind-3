from django.shortcuts import get_object_or_404


class Query(object):
    """ Query helper
    """
    def __init__(self, *args, **kwargs):
        return super(Query, self).__init__(*args, **kwargs)

    def Qfilter(self, **kwargs):
        _model = self.serializer_class.Meta.model
        return _model.objects.filter(**kwargs)

    def Qget(self, **kwargs):
        _model = self.serializer_class.Meta.model
        return get_object_or_404(_model, **kwargs)
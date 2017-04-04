# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView


from core import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^logbook/$', views.logbook, name='logbook'),
    url(r'^about/$', TemplateView.as_view(template_name='about.html'), name='about'),
    url(r'^robots\.txt', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    url(r'^humans\.txt', TemplateView.as_view(template_name='humans.txt', content_type='text/plain')),
    url('^sitemap\.xml$', TemplateView.as_view(template_name='humans.txt', content_type='text/xml')),
    url(settings.ADMIN_URL, admin.site.urls),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r'^400/$', TemplateView.as_view(template_name='400.html')),  # bad request
        url(r'^403/$', TemplateView.as_view(template_name='403.html')),  # permission denied
        url(r'^404/$', TemplateView.as_view(template_name='404.html')),  # not found
        url(r'^500/$', TemplateView.as_view(template_name='500.html')),  # internal error
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns += [
            url(r'^__debug__/', include(debug_toolbar.urls)),
        ]

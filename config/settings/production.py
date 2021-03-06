# -*- coding: utf-8 -*-
"""
Production Configurations

- Use Amazon's S3 for storing static files and uploaded media
- Use Redis for cache


"""
from __future__ import absolute_import, unicode_literals

from datetime import date, timedelta

from boto.s3.connection import OrdinaryCallingFormat
from django.utils import six


from .base import *  # noqa

# Use .env file
READ_DOT_ENV_FILE = True

# SECRET CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# Raises ImproperlyConfigured exception if DJANGO_SECRET_KEY not in os.environ
SECRET_KEY = env('DJANGO_SECRET_KEY')


# This ensures that Django will be able to detect a secure connection
# properly on Heroku.
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# SECURITY CONFIGURATION
# ------------------------------------------------------------------------------
# See https://docs.djangoproject.com/en/dev/ref/middleware/#module-django.middleware.security
# and https://docs.djangoproject.com/en/dev/howto/deployment/checklist/#run-manage-py-check-deploy

# set this to 60 seconds and then to 518400 when you can prove it works
SECURE_HSTS_SECONDS = 60
SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool(
    'DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS', default=True)
SECURE_CONTENT_TYPE_NOSNIFF = env.bool(
    'DJANGO_SECURE_CONTENT_TYPE_NOSNIFF', default=True)
SECURE_BROWSER_XSS_FILTER = True
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SECURE_SSL_REDIRECT = env.bool('DJANGO_SECURE_SSL_REDIRECT', default=True)
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
X_FRAME_OPTIONS = 'DENY'

# SITE CONFIGURATION
# ------------------------------------------------------------------------------
# Hosts/domain names that are valid for this site
# See https://docs.djangoproject.com/en/dev/ref/settings/#allowed-hosts
ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=['.menorkayak.com', ])
# END SITE CONFIGURATION

INSTALLED_APPS += ['gunicorn', ]


# STORAGE CONFIGURATION
# ------------------------------------------------------------------------------
# Uploaded Media Files
# ------------------------
# See: http://django-storages.readthedocs.io/en/latest/index.html
INSTALLED_APPS += ['storages', ]

AWS_ACCESS_KEY_ID = env('DJANGO_AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = env('DJANGO_AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = env('DJANGO_AWS_STORAGE_BUCKET_NAME')
AWS_AUTO_CREATE_BUCKET = False
AWS_QUERYSTRING_AUTH = False
AWS_S3_CALLING_FORMAT = OrdinaryCallingFormat()
AWS_S3_HOST = 's3.eu-central-1.amazonaws.com'
AWS_IS_GZIPPED = True

# AWS cache settings, don't change unless you know what you're doing:
AWS_EXPIRY = 60 * 60 * 24 * 7

# TODO See: https://github.com/jschneier/django-storages/issues/47
# Revert the following and use str after the above-mentioned bug is fixed in
# either django-storage-redux or boto
AWS_HEADERS = {
    'Cache-Control': six.b('max-age=%d, s-maxage=%d, must-revalidate' % (
        AWS_EXPIRY, AWS_EXPIRY)),
    'Expires': (date.today() + timedelta(days=30)).strftime('%a, %d %b %Y 20:00:00 GMT')  # 1 month expire date
}

# URL that handles the media served from MEDIA_ROOT, used for managing
# stored files.

#  See:http://stackoverflow.com/questions/10390244/
DEFAULT_FILE_STORAGE = 'config.storage.S3CustomStorage'
MEDIA_URL = 'https://%s/%s/media/' % (AWS_S3_HOST, AWS_STORAGE_BUCKET_NAME)

# Static Assets
# ------------------------

STATIC_URL = 'https://%s/%s/' % (AWS_S3_HOST, AWS_STORAGE_BUCKET_NAME)
STATICFILES_STORAGE = 'config.storage.CachedS3BotoStorage'

COMPRESS_STORAGE = STATICFILES_STORAGE
COMPRESS_URL = STATIC_URL
COMPRESS_CSS_FILTERS = (
    'compressor.filters.cleancss.CleanCSSFilter',
)
COMPRESS_CLEAN_CSS_BINARY = str(ROOT_DIR) + '/node_modules/clean-css-cli/bin/cleancss'
COMPRESS_OFFLINE = True
# See: https://github.com/antonagestam/collectfast
# For Django 1.7+, 'collectfast' should come before
# 'django.contrib.staticfiles'
AWS_PRELOAD_METADATA = True
INSTALLED_APPS = ['collectfast', ] + INSTALLED_APPS

# TEMPLATE CONFIGURATION
# ------------------------------------------------------------------------------
# See:
# https://docs.djangoproject.com/en/dev/ref/templates/api/#django.template.loaders.cached.Loader
TEMPLATES[0]['OPTIONS']['loaders'] = [
    ('django.template.loaders.cached.Loader', [
        'django.template.loaders.filesystem.Loader', 'django.template.loaders.app_directories.Loader', ]),
]

# CACHE

MIDDLEWARE = [
    'django.middleware.cache.UpdateCacheMiddleware',
    'django.middleware.cache.FetchFromCacheMiddleware',
] + MIDDLEWARE

CACHE_MIDDLEWARE_ALIAS = 'default'
CACHE_MIDDLEWARE_SECONDS = 2592000  # 1 month

# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------

# Use the Heroku-style specification
# Raises ImproperlyConfigured exception if DATABASE_URL not in os.environ
DATABASES['default'] = env.db('DATABASE_URL')

# CACHING
# ------------------------------------------------------------------------------

REDIS_LOCATION = '{0}/{1}'.format(env('REDIS_URL', default='redis://127.0.0.1:6379'), 1)
# Heroku URL does not pass the DB number, so we parse it in
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': REDIS_LOCATION,
        'KEY_PREFIX': SITE_NAME,
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
            'IGNORE_EXCEPTIONS': True,  # mimics memcache behavior.
                                        # http://niwinz.github.io/django-redis/latest/#_memcached_exceptions_behavior
        }
    }
}


# LOGGING CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#logging
# A sample logging configuration.
# See https://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.

# Nothing gets sent on errors
EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

LOGS_DIR = ROOT_DIR.path('log')

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s '
                      '%(process)d %(thread)d %(message)s'
        },
    },
    'handlers': {
        'file': {
            'level': 'ERROR',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': str(LOGS_DIR.path('menorkayak.log')),
            'formatter': 'verbose',
            'maxBytes': 1024 * 1024 * 50,
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['file'],
            'level': 'ERROR',
            'propagate': True
        },
        'django.security.DisallowedHost': {
            'level': 'ERROR',
            'handlers': ['file'],
            'propagate': True
        }
    }
}

BASE_URL = 'https://menorkayak.com'

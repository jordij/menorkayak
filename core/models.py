from django.db import models


class Place(models.Model):
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    name = models.CharField(max_length=255, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Day(models.Model):
    vimeo_id = models.CharField(max_length=255, blank=False, unique=True)
    music = models.CharField(max_length=255, blank=False)
    starts_at = models.ForeignKey(Place, null=False, related_name='starting_at')
    ends_at = models.ForeignKey(Place, null=False, related_name='ending_at')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return '%s - %s' % (self.starts_at, self.ends_at)

    class Meta:
        ordering = ['pk']


class PictureManager(models.Manager):
    def enabled(self):
        return self.filter(enabled=True)


class Picture(models.Model):
    objects = PictureManager()

    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    name = models.CharField(max_length=255, blank=False)
    image = models.ImageField(blank=True)
    thumbnail = models.ImageField(blank=True, upload_to='thumbnails/')
    enabled = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    day = models.ForeignKey(Day, null=False)

    def __str__(self):
        return self.name


class Point(models.Model):
    day = models.ForeignKey(Day, null=False)
    order = models.PositiveIntegerField(null=False)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s-%s Day %s' % (self.lat, self.lon, self.day)

    class Meta:
        ordering = ['day', 'order']

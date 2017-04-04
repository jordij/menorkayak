from django.shortcuts import render

from core.models import Day, Place


def home(request):
    days = Day.objects.all()
    context = {'days': days}
    return render(request, 'home.html', context)


def logbook(request):
    days = Day.objects.all()
    places = Place.objects.all()
    context = {'days': days, 'places': places}
    return render(request, 'logbook.html', context)

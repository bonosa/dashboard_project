from django.shortcuts import render
from django.http import JsonResponse
from .models import DataPoint

def index(request):
    # Render the chart.html template
    return render(request, 'dashboard/chart.html')

def get_data(request):
    # Fetch data from DataPoint model and return as JSON
    data = list(DataPoint.objects.values())
    return JsonResponse({'data': data})

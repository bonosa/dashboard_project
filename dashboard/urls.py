from django.urls import path
from .views import index, get_data

urlpatterns = [
    path('', index, name='index'),  # Root URL to render the chart.html template
    path('api/data/', get_data, name='get-data'),  # URL for the AJAX call to fetch data
]

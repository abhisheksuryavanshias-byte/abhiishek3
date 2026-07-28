from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
    data={"data":"welcome to the Ecommerce store"}
    return JsonResponse(data)
from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import get_template
import json

# Create your views here.
def MAIN(request):
    t = get_template("products.html")
    html = t.render()
    return HttpResponse(html)

def products(request):



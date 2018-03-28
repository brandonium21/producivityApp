from .base import *


SECRET_KEY = env('DJANGO_SECRET_KEY', default='&7-3p+amgj@q%wpyceb*!$8x#n)!(ld60r27m5axew)^npi$a+')
DEBUG = env.bool('DJANGO_DEBUG', default=True)
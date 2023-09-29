from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from django.urls import path,include
admin.site.site_header = "Siphon Admin"
admin.site.site_title = "Siphon Admin Portal"
admin.site.index_title = "Welcome to Siphon Admin Portal"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("app.urls")),
] 
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
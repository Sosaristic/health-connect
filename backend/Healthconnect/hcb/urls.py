from django.urls import path
from . import views

urlpatterns = [
    path('signup/',views.UserRegistrationView.as_view()),
    path('signin/',views.MyTokenObtainPairView.as_view()),
    path('patient/',views.UpdateDeletePatientProfileView.as_view()),
    path('doctor/',views.UpdateDeleteDoctorProfileView.as_view()),
    path('doctors/all',views.GetAllDoctors.as_view()),
    path('profile/<str:pk>/',views.userProfile)  
]
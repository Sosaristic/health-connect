from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from django.db.models import Q
from rest_framework import status, mixins, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.urls import reverse
from django.conf import settings
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import User,Doctor,Patient
from .serializers import (UserLoginSerializer,UserSignUpSerializer,
                          MyTokenObtainPairSerializer,UserSerializer,
                          PatientProfileSerializer,DoctorProfileSerializer,
                          DoctorProfileSerializer2
                          )



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

# class GetUsers(mixins.ListModelMixin, generics.GenericAPIView):
#     queryset = User.objects.all()
#     permission_classes = [IsAdminUser]
#     serializer_class = UserSerializer
    
#     def get(self, request):
#         print(request.user.is_staff)
#         return self.list(request)


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer

class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(request, email=email, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                    'userId': user.id,
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
           
        else:
            return Response({
                'error': 'Invalid email or password'
}, status=status.HTTP_401_UNAUTHORIZED)




# class PasswordResetView(generics.GenericAPIView):
    # serializer_class = serializers.EmailSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                pass
            else:
                token_generator = default_token_generator
                context = {
                    'email': email,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': token_generator.make_token(user),
                    'protocol': 'http' if settings.DEBUG else 'https',
                }
                reset_url = reverse('password_reset_confirm')
                reset_url = f'{context["protocol"]}://{request.get_host()}{reset_url}?{urlencode(context)}'
                send_mail(
                    'Password reset',
                    f'Click the following link to reset your password: {reset_url}',
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                )
            return Response({'success': 'Password reset email sent'})
        
class UpdateDeletePatientProfileView(generics.UpdateAPIView,generics.DestroyAPIView):
    serializer_class=PatientProfileSerializer
    
    def get_object(self):
        try:
            user = self.request.user
            return user.patient
        except :
            raise ValueError('You can only update Patient Profile')
        
    def patch(self,request):
        data = request.data
        patient = self.get_object()
        user = patient.user
        user.firstname = data.get('firstname',None)
        user.last_name = data.get('lastname',None)
        user.image = data.get('image',None)
        user.phone_number = data.get('phonenumber',None)
        user.gender = data.get('gender',None)
        user.state = data.get('state',None)
        patient.age = data.get('age',None)
        patient.blood_group = data.get('blood_group',None)
        patient.genotype = data.get('genotype',None)
        patient.weight = data.get('weight',None)
        patient.marital_status = data.get('marital_status',None)
        patient.medical_history = data.get('medical_history',None)
        user.save()
        patient.save()
        serializer = self.get_serializer(patient, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self,request):
        user = self.request.user
        user.delete()
        return Response({'message':'User sucessfully deleted'},status.HTTP_204_NO_CONTENT)
    
    
class UpdateDeleteDoctorProfileView(generics.UpdateAPIView,generics.DestroyAPIView):
    serializer_class = DoctorProfileSerializer
    permission_classes= [IsAdminUser]
    
    def get_object(self):
        
        try:
            user = self.request.user
            return user.doctor
        except :
            raise ValueError('You can only updateDoctorProfile')
        
    def patch(self,request):
        data = request.data
        doctor = self.get_object()
        print(data)
        user = doctor.user
        user.first_name = data.get('firstname',None)
        user.last_name = data.get('lastname',None)
        user.image = data.get('image',None)
        user.phone_number = data.get('phonenumber',None)
        user.gender = data.get('gender',None)
        user.state = data.get('state',None)
        doctor.hospital = data.get('hospital',None)
        doctor.experience = data.get('experience',None)
        doctor.field = data.get('field',None)
        user.save()
        doctor.save()
        serializer = self.get_serializer(doctor, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self):
        user = self.request.user
        user.delete()
        return Response({'message':'User sucessfully deleted'},status.HTTP_204_NO_CONTENT)
        
    
class GetAllDoctors(generics.ListAPIView):
    serializer_class = DoctorProfileSerializer
    
    def get_queryset(self):
        queryset=Doctor.objects.all()
        query = self.request.query_params.get('q')
        if query is not None:
            queryset = queryset.filter(Q(user__first_name__icontains=query)
                                       |Q(user__last_name__icontains=query)
                                       |Q(hospital__icontains=query)
                                       |Q(experience__icontains=query)
                                       )
            return queryset
        return queryset
      
        
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userProfile(request,pk):
    user = User.objects.get(id=pk)
    if user.role == 'PATIENT':
        patient = user.patient
        serializer = PatientProfileSerializer(patient,many=False)
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
    elif user.role == 'DOCTOR':
        doctor = user.doctor
        serializer = DoctorProfileSerializer(doctor,many=False)
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
    

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # def get_object(self):
    #     obj = self.get_queryset()
    #     return obj
    
    
        
    # def get_serializer_class(self):
    #     if self.request.user.is_staff:
    #         return DoctorProfileSerializer 
    #     return PatientProfileSerializer
    
    # def put(self,request):
    #     data = request.data
    #     profile = self.get_object()


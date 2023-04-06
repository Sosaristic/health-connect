from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.urls import reverse
from django.conf import settings
from .models import User
from .serializers import UserLoginSerializer,UserSignUpSerializer

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
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({
                'error': 'nvalid email or password'
}, status=status.HTTP_401_UNAUTHORIZED)

class PasswordResetView(generics.GenericAPIView):
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


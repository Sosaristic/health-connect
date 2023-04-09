from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User,Patient,Doctor


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'role')

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name


class UserSerializerToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('id', '_id', 'name','email', 'token')

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    class Meta:
        fields = ('role','email','password')
        model = User
        
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["role"] = user.role

        return token

    # def validate(self, attrs):
    #     data = super().validate(attrs)

    #     serializer = UserSerializerToken(self.user).data
    #     for k, v in serializer.items():
    #         data[k] = v
    #     return data

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password','role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        if user.role == 'Doctor':
            user.is_staff = True
            user.save()
            return user
        return user

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance, validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password','role')
        extra_kwargs = {'password': {'write_only': True}}

class UserProfileSeriliazer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','image','email','first_name','last_name','phone_number','gender','state')  
        
        
class PatientProfileSerializer(serializers.ModelSerializer):
    uid = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    firstname  = serializers.SerializerMethodField(read_only=True)
    lastname = serializers.SerializerMethodField(read_only=True)
    phonenumber = serializers.SerializerMethodField(read_only=True)
    gender = serializers.SerializerMethodField(read_only=True)
    state = serializers.SerializerMethodField(read_only=True)    
    class Meta:
        model=Patient
        fields=('uid','image','email','firstname','lastname','phonenumber','gender','state','blood_group','age','weight','genotype','marital_status','medical_history')
        
    def get_user(self, obj):
        user = obj.user
        serializer = UserProfileSeriliazer(user, many=False)
        return serializer.data 
    
    def get_uid(self, obj):
        user = self.get_user(obj)
        print(user)
        return user['id']
    
    def get_image(self, obj):
        user = self.get_user(obj)
        return user['image'] 
    
    def get_email(self, obj):
        user = self.get_user(obj)
        return user['email']
    
    def get_firstname(self, obj):
        user = self.get_user(obj)
        return user['first_name']
    
    def get_lastname(self, obj):
        user = self.get_user(obj)
        return user['last_name'] 
    
    def get_phonenumber(self, obj):
        user = self.get_user(obj)
        return user['phone_number'] 
     
    def get_state(self, obj):
        user = self.get_user(obj)
        return user['state'] 
    
    def get_gender(self, obj):
        user = self.get_user(obj)
        return user['gender'] 
         
    
        

            
              
        
         

        
                  
        
class DoctorProfileSerializer(serializers.ModelSerializer):
    uid = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    firstname  = serializers.SerializerMethodField(read_only=True)
    lastname = serializers.SerializerMethodField(read_only=True)
    phonenumber = serializers.SerializerMethodField(read_only=True)
    gender = serializers.SerializerMethodField(read_only=True)
    state = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=Doctor
        fields=('uid','image','email','firstname','lastname','phonenumber','gender','state','hospital','experience','field')

        
    def get_user(self, obj):
        user = obj.user
        serializer = UserProfileSeriliazer(user, many=False)
        return serializer.data 
    
    def get_uid(self, obj):
        user = self.get_user(obj)
        return user['id']
    
    def get_image(self, obj):
        user = self.get_user(obj)
        return user['image'] 
    
    def get_email(self, obj):
        user = self.get_user(obj)
        return user['email']
    
    def get_firstname(self, obj):
        user = self.get_user(obj)
        return user['first_name']
    
    def get_lastname(self, obj):
        user = self.get_user(obj)
        return user['last_name'] 
    
    def get_phonenumber(self, obj):
        user = self.get_user(obj)
        return user['phone_number'] 
     
    def get_state(self, obj):
        user = self.get_user(obj)
        return user['state'] 
    
    def get_gender(self, obj):
        user = self.get_user(obj)
        return user['gender'] 
         
    
        

            
              
        
    
    
    
class DoctorProfileSerializer2(serializers.ModelSerializer):
   
    uid = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    firstname  = serializers.SerializerMethodField(read_only=True)
    lastname = serializers.SerializerMethodField(read_only=True)
    phonenumber = serializers.SerializerMethodField(read_only=True)
    gender = serializers.SerializerMethodField(read_only=True)
    state = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=Doctor
        fields=('uid','image','email','firstname','lastname','phonenumber','gender','state','hospital','experience','field')
    
    def get_user(self, obj):
        user = obj.user
        serializer = UserProfileSeriliazer(user, many=False)
        return serializer.data 
    
        
    def get_uid(self, obj):
        user = self.get_user(obj)
        print(user)
        return user['id']
    
    def get_image(self, obj):
        user = self.get_user(obj)
        return user['image'] 
    
    def get_email(self, obj):
        user = self.get_user(obj)
        return user['email']
    
    def get_firstname(self, obj):
        user = self.get_user(obj)
        return user['first_name']
    
    def get_lastname(self, obj):
        user = self.get_user(obj)
        return user['last_name'] 
    
    def get_phonenumber(self, obj):
        user = self.get_user(obj)
        return user['phone_number'] 
     
    def get_state(self, obj):
        user = self.get_user(obj)
        return user['state'] 
    
    def get_gender(self, obj):
        user = self.get_user(obj)
        return user['gender'] 
         
    
        

            
              
        
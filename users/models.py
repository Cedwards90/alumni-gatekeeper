from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = 'admin', 'Admin'
        STUDENT = 'student', 'Student'
        ALUMNI = 'alumni', 'Alumni'

    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.STUDENT
    )
    email = models.EmailField(unique=True)
    
    # Remove username field since we're using email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.email} ({self.get_role_display()})"

from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

class Request(models.Model):
    class RequestType(models.TextChoices):
        BARRIER = 'barrier', 'Barrier'
        ALUMNI = 'alumni', 'Alumni'
    
    class Status(models.TextChoices):
        PENDING = 'pending', 'Pending'
        APPROVED = 'approved', 'Approved'
        DENIED = 'denied', 'Denied'
    
    # Core fields
    type = models.CharField(max_length=10, choices=RequestType.choices)
    status = models.CharField(
        max_length=10, 
        choices=Status.choices, 
        default=Status.PENDING
    )
    category = models.CharField(max_length=100)
    student = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='requests'
    )
    details = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Barrier-specific fields
    barrier_type = models.CharField(max_length=50, blank=True, null=True)
    
    # Alumni-specific fields
    support_type = models.CharField(max_length=100, blank=True, null=True)
    
    def __str__(self):
        return f"{self.get_type_display()} Request - {self.student}"


class RequestFile(models.Model):
    request = models.ForeignKey(
        Request,
        on_delete=models.CASCADE,
        related_name='files'
    )
    file = models.FileField(upload_to='request_files/')
    original_name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.original_name

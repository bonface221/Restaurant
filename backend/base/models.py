from django.db import models

# Create your models here.


class Restaurant(models.Model):
    tilsynsbesoektype = models.CharField(max_length=255)
    poststed = models.CharField(max_length=255)
    sakref = models.CharField(max_length=255)
    tilsynsobjektid = models.CharField(max_length=255)
    orgnummer = models.CharField(max_length=255)
    postnr = models.CharField(max_length=255)
    dato = models.CharField(max_length=255)
    navn = models.CharField(max_length=255)
    tema1_no = models.CharField(max_length=255)
    tema3_nn = models.CharField(max_length=255)
    tema1_nn = models.CharField(max_length=255)
    tema3_no = models.CharField(max_length=255)
    tilsynid = models.CharField(max_length=255)
    adrlinje1 = models.CharField(max_length=255)
    karakter1 = models.CharField(max_length=255, blank=True, null=True)
    adrlinje2 = models.CharField(max_length=255, blank=True, null=True)
    karakter2 = models.CharField(max_length=255, blank=True, null=True)
    karakter3 = models.CharField(max_length=255, blank=True, null=True)
    karakter4 = models.CharField(max_length=255, blank=True, null=True)
    total_karakter = models.CharField(max_length=255)
    tema4_no = models.CharField(max_length=255)
    tema4_nn = models.CharField(max_length=255)
    tema2_no = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    tema2_nn = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.navn

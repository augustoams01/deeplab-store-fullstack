from django.db import models


class Product(models.Model):
    """
    Representa um produto disponível na loja.
    """

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    # Imagem opcional do produto (armazenada em MEDIA_ROOT/products/)
    image = models.ImageField(
        upload_to='products/',
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name


class Cart(models.Model):
    """
    Carrinho de compras.
    Cada instância representa um carrinho criado por um usuário/sessão.
    """

    created_at = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    """
    Item dentro do carrinho.

    Relaciona:
    - um carrinho
    - um produto
    - a quantidade selecionada
    """

    cart = models.ForeignKey(
        Cart,
        related_name='items',
        on_delete=models.CASCADE
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(default=1)

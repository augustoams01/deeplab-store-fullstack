from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Product, Cart, CartItem
from .serializers import (
    ProductSerializer,
    CartSerializer,
    CartItemSerializer
)


class ProductViewSet(viewsets.ModelViewSet):
    """
    API completa de produtos (CRUD).

    Permite:
    - Criar produto
    - Listar produtos
    - Atualizar produto
    - Deletar produto

    Suporte a upload de imagem via multipart/form-data.
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    parser_classes = (MultiPartParser, FormParser)


class CartViewSet(viewsets.ModelViewSet):
    """
    API de carrinho.

    Responsável por criar e gerenciar carrinhos.
    Itens são acessados via relacionamento (CartItem).
    """

    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemViewSet(viewsets.ModelViewSet):
    """
    API de itens do carrinho.

    Permite adicionar, atualizar quantidade e remover produtos do carrinho.
    """

    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

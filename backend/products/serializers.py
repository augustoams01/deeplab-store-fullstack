from rest_framework import serializers
from .models import Product, Cart, CartItem


class ProductSerializer(serializers.ModelSerializer):
    """
    Serializa todos os campos do modelo Product.
    Usado para listagem e detalhamento de produtos.
    """

    class Meta:
        model = Product
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    """
    Serializador de itens do carrinho.

    Estratégia:
    - 'product' → leitura completa (nested serializer)
    - 'product_id' → escrita (relacionamento via ID)
    """

    product = ProductSerializer(read_only=True)

    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product',
        write_only=True
    )

    class Meta:
        model = CartItem
        fields = [
            'id',
            'cart',
            'product',
            'product_id',
            'quantity'
        ]


class CartSerializer(serializers.ModelSerializer):
    """
    Serializa o carrinho incluindo seus itens relacionados.
    """

    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = '__all__'

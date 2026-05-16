from django.core.management.base import BaseCommand
from django.core.files import File

from products.models import Product

from pathlib import Path
import random


class Command(BaseCommand):

    help = 'Popula produtos fictícios com imagens'

    def handle(self, *args, **kwargs):

        BASE_DIR = Path('/app')

        image_dir = BASE_DIR / 'seeds' / 'products'

        image_files = [
            'can1.png',
            'can2.png',
            'can3.png',
        ]

        products = [

            {
                'name': 'Volt Rush',
                'description': 'Ultra energy drink with citrus flavor and zero crash effect.',
            },

            {
                'name': 'Neon Pulse',
                'description': 'Tropical energy blend crafted for focus and performance.',
            },

            {
                'name': 'Hyper Fuel',
                'description': 'Strong berry flavor with long-lasting hydration.',
            },

            {
                'name': 'Nova Blast',
                'description': 'Carbonated mango energy drink with natural caffeine.',
            },

            {
                'name': 'Shadow Charge',
                'description': 'Dark fruit fusion designed for intense workouts.',
            },

        ]

        for index, item in enumerate(products):

            product, created = Product.objects.get_or_create(
                name=item['name'],
                defaults={
                    'description': item['description'],
                    'price': round(random.uniform(4.99, 14.99), 2)
                }
            )

            # adiciona imagem somente se não existir
            if created and not product.image:

                image_name = image_files[index % len(image_files)]

                image_path = image_dir / image_name

                with open(image_path, 'rb') as img:

                    product.image.save(
                        image_name,
                        File(img),
                        save=True
                    )

        self.stdout.write(
            self.style.SUCCESS('Produtos criados com imagens!')
        )
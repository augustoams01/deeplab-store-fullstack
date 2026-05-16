import { useEffect, useState } from 'react'

import { ProductCard } from '../components/ProductCard'

import { api } from '../services/api'

import type { Product } from '../types/products'



function CarouselSection() {

  const [products, setProducts] = useState<Product[]>([])

  async function fetchProducts() {

    try {

      const response = await api.get('/products/')

      setProducts(response.data)

    } catch (error) {

      console.error(error)

    }
  }

  useEffect(() => {

    fetchProducts()

  }, [])

  return (

    <div className='section-texture min-h-screen w-screen flex flex-col items-center relative overflow-hidden px-10 py-20'>

      <h1 className="text-6xl font-bold text-gray-300">
        Discover Our Collections
      </h1>

      <div className='mt-10 flex flex-wrap justify-center gap-10'>

        {
          products.map((product, index) => (

            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.name}
              description={product.description}
              price={Number(product.price)}
            />

          ))
        }

      </div>

    </div>
  )
}

export default CarouselSection
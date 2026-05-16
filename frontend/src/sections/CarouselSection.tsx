import { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { api } from '../services/api'
import type { Product } from '../types/products'

/**
 * Seção de listagem de produtos.
 *
 * Responsável por:
 * - Buscar produtos na API
 * - Renderizar cards dinamicamente
 * - Servir como vitrine principal da loja
 */
function CarouselSection() {

  const [products, setProducts] = useState<Product[]>([])

  /**
   * Busca lista de produtos no backend.
   */
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
    <div id='shop' className='section-texture min-h-screen w-screen flex flex-col items-center px-10 py-20'>

      <h1 className="text-6xl font-bold text-gray-300">
        Discover Our Collections
      </h1>

      <div className='mt-10 flex flex-wrap justify-center gap-10'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={Number(product.price)}
          />
        ))}
      </div>

    </div>
  )
}

export default CarouselSection

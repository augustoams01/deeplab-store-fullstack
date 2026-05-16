import { useState } from 'react'
import { api } from '../services/api'

/**
 * Props do card de produto.
 * Representa os dados vindos da API.
 */
type ProductCardProps = {
  id: number
  image: string
  title: string
  description: string
  price: number
}

/**
 * Card de produto.
 *
 * Responsabilidades:
 * - Controlar quantidade local
 * - Adicionar produto ao carrinho via API
 * - Criar carrinho automaticamente se não existir
 */
export function ProductCard({
  id,
  image,
  title,
  description,
  price,
}: ProductCardProps) {

  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)

  function increaseQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  /**
   * Adiciona produto ao carrinho.
   *
   * Fluxo:
   * 1. Verifica se existe cart_id no localStorage
   * 2. Se não existir, cria um novo carrinho na API
   * 3. Adiciona item ao carrinho com quantidade selecionada
   */
  async function addToCart() {
    try {
      setLoading(true)

      let cartId: string | null = localStorage.getItem('cart_id')

      // Cria carrinho caso não exista
      if (!cartId) {
        const cartResponse = await api.post('/carts/')
        cartId = String(cartResponse.data.id)

        localStorage.setItem('cart_id', cartId)
      }

      // Adiciona item ao carrinho
      await api.post('/cart-items/', {
        cart: cartId,
        product_id: id,
        quantity,
      })

      alert('Produto adicionado ao carrinho')

    } catch (error) {
      console.error(error)
      alert('Erro ao adicionar produto')

    } finally {
      setLoading(false)
    }
  }

  const totalPrice = price * quantity

  return (
    <div className="w-[380px] rounded-3xl p-6 flex flex-col items-center">

      <img
        src={image}
        alt={title}
        className="w-[330px] h-[330px] bg-dark/70 rounded-xl object-contain drop-shadow-2xl"
      />

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>

        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Controle de quantidade + ação */}
      <div className='flex gap-5'>

        <div className="mt-6 flex items-center">
          <button onClick={decreaseQuantity}>-</button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>+</button>
        </div>

        <button
          onClick={addToCart}
          disabled={loading}
        >
          {loading
            ? 'Adding...'
            : `Add To Cart — R$ ${totalPrice.toFixed(2)}`
          }
        </button>

      </div>
    </div>
  )
}

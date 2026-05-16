import { useState } from 'react'
import { api } from '../services/api'

type ProductCardProps = {
  id: number
  image: string
  title: string
  description: string
  price: number
}

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

 async function addToCart() {

  try {

    setLoading(true)

    let cartId: string | null = localStorage.getItem('cart_id')

    // cria carrinho caso não exista

    if (!cartId) {

      const cartResponse = await api.post('/carts/')

      cartId = String(cartResponse.data.id)

      localStorage.setItem('cart_id', cartId)
    }

    // adiciona item

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

      <div className='flex gap-5'>

        <div className="mt-6 flex items-center ">

          <button
            onClick={decreaseQuantity}
            className="cursor-pointer w-10 h-10 border-l border-t border-b border-b-gray-300/20 border-t-gray-300/20 border-l-gray-300/20 rounded-l-full bg-white/10 text-white text-xl"
          >
            -
          </button>

          <span className="text-white border-t border-b border-b-gray-300/20 border-t-gray-300/20 bg-white/10 h-[80%] text-lg flex items-center z-50 px-1">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="cursor-pointer w-10 h-10 rounded-r-full border-r border-b border-t border-t-gray-300/20 border-b-gray-300/20 border-r-gray-300/20 bg-white/10 text-white text-xl"
          >
            +
          </button>

        </div>

        <button
          onClick={addToCart}
          disabled={loading}
          className="mt-6 py-3 px-4 rounded-full bg-transparent border border-primary text-gray-300 hover:scale-[1.02] transition"
        >

          {
            loading
              ? 'Adding...'
              : `Add To Cart — R$ ${totalPrice.toFixed(2)}`
          }

        </button>

      </div>

    </div>
  )
}
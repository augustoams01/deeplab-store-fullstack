import { useEffect, useState } from 'react'

import { api } from '../services/api'

type CartModalProps = {
  isOpen: boolean
  onClose: () => void
}

type CartItem = {
  id: number
  quantity: number
    product: {
    name: string
    price: number
    image: string
    }
}

type Cart = {
  id: number
  items: CartItem[]
}

export function CartModal({
  isOpen,
  onClose,
}: CartModalProps) {

  const [cart, setCart] = useState<Cart | null>(null)

  async function fetchCart() {

    try {

      const cartId = localStorage.getItem('cart_id')

      if (!cartId) return

      const response = await api.get(`/carts/${cartId}/`)

      setCart(response.data)

    } catch (error) {

      console.error(error)

    }
  }

  useEffect(() => {

    if (isOpen) {
      fetchCart()
    }

  }, [isOpen])

  if (!isOpen) return null

  const total = cart?.items.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity)
  }, 0)

  return (

    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">

      <div className="w-[450px] h-full bg-[#111] p-6 overflow-y-auto">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl text-white font-bold">
            Cart
          </h2>

          <button
            onClick={onClose}
            className="text-white text-2xl"
          >
            ×
          </button>

        </div>

        <div className="mt-8 flex flex-col gap-4">

          {
            cart?.items.map((item) => (
<div
  key={item.id}
  className="bg-white/5 rounded-2xl p-4 flex gap-4"
>

  <img
    src={item.product.image}
    alt={item.product.name}
    className="w-24 h-24 object-contain bg-black/20 rounded-xl"
  />

  <div className="flex flex-col justify-center">

    <h3 className="text-white text-lg">
      {item.product.name}
    </h3>

    <p className="text-gray-400">
      Quantity: {item.quantity}
    </p>

    <p className="text-primary mt-2">
      R$ {(item.product.price * item.quantity).toFixed(2)}
    </p>

  </div>

</div>
            ))
          }

        </div>

        <div className="mt-10 border-t border-white/10 pt-6">

          <h2 className="text-2xl text-white font-bold">

            Total:
            <span className="text-primary ml-2">
              R$ {total?.toFixed(2)}
            </span>

          </h2>

        </div>

      </div>

    </div>
  )
}
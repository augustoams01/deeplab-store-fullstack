import { useState } from 'react'

import { LuShoppingCart } from "react-icons/lu"

import { CartModal } from '../components/CartModal'

function Header() {

  const [isCartOpen, setIsCartOpen] = useState(false)

  return (

    <>
    
      <div className="flex justify-around items-center fixed top-4 w-full z-40">

        <div className="w-[100px] lg:block md:block sm:hidden">

          <h1 className="text-2xl text-primary font-semibold font-serif">
            DeepLab.
          </h1>

        </div>

        <div className="flex items-center justify-center">

          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">

            <a href="#" className="nav-item">Home</a>
            <a href="#projects" className="nav-item">Shop</a>
            <a href="#products" className="nav-item">Products</a>
            <a href="#about" className="nav-item">Testemonials</a>

            <a
              href="#contact"
              className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            >
              Contato
            </a>

          </nav>

        </div>

        <nav className="flex gap-3 p-0.5 lg:flex md:flex sm:hidden">

          <button
            onClick={() => setIsCartOpen(true)}
            className="cursor-pointer"
          >

            <LuShoppingCart
              size={25}
              color="#1add67"
            />

          </button>

        </nav>

      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </>
  )
}

export default Header
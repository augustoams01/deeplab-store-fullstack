
import canImage from '../assets/images/can-section-1.png'
import canImage2 from '../assets/images/can-section-2.png'
import canImage3 from '../assets/images/can-section-2-2.png'
import { ProductCard } from '../components/ProductCard'

function CarrosselSection() {
  return (

    <div className='section-texture min-h-screen w-screen flex flex-col items-center relative overflow-hidden px-10 py-20'>

      <h1 className="text-6xl font-bold text-gray-300">
        Discover Our Collections
      </h1>

      <div className='mt-10 flex flex-wrap justify-center gap-10'>

        <ProductCard  
          image={canImage}
          title="Deep Energy"
          description="Natural energy drink with refreshing organic ingredients."
          price={12.90}
        />

        <ProductCard
          image={canImage2}
          title="Fresh Lime"
          description="Sparkling lime flavor with extra hydration and energy."
          price={15.90}
        />

        <ProductCard
          image={canImage3}
          title="Berry Power"
          description="Mixed berries with vitamins and natural caffeine."
          price={18.90}
        />

      </div>

    </div>
  )
}

export default CarrosselSection
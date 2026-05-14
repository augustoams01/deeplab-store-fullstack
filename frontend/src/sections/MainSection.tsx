import canImage from '../assets/images/can-section-1.png'
import textureImage from '../assets/images/texture-section-1.jpg'

function MainSection() {
  return (
    <section
      
      className='section-texture h-screen w-screen flex items-center justify-center relative overflow-hidden'

    >
      
      <div className="bg-[#0f0f0f]/80 w-[97%] h-[86%] rounded-3xl mt-[58px] relative overflow-hidden">

        {/* IMAGEM DA LATA */}
        <img 
          src={canImage} 
          alt="" 
          className='absolute w-[55%] -bottom-[280px] left-0 z-10'
        />

        {/* TEXTO */}
        <div className='absolute left-[55%] top-1/2 -translate-y-1/2 w-[35%] text-white z-20'>
          
          <h1 className='text-6xl font-bold leading-tight uppercase tracking-wider'>
            feel the refreshment in every sip
          </h1>

          <p className='mt-6 text-md text-gray-300'>
            A Perfectly Balanced Drink Made With Natural Ingredients To Hydrate,
            Energize, And Refresh You Anytime, Anywhere.
          </p>

          <div className='mt-6'>
            <p className='text-gray-300/40  text-sm tracking-wide'>Soda DeepLab Drink</p>

            <div className='flex gap-3'>
              <h3 className='text-7xl font-bold'>
                100% 
              </h3>
              <span className='text-lg text-gray-300 font-semibold mt-3'>organic <br /> energy drink</span>
            </div>

          </div>

          <div className='mt-6 flex gap-5'>
            <button className=' py-3 px-8 rounded-full bg-[#1add67] text-gray-300 font-semibold'>
              Shop Now
            </button>

            <button className='py-3 px-8 rounded-full bg-transparent border border-[#1add67] text-gray-300'>
              Explore Flavors
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}

export default MainSection
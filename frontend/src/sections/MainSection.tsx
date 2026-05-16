import canImage from '../assets/images/can-section-1.png'
import liquidImage from '../assets/images/liquid-section-1.png'
import textureImage from '../assets/images/texture-section-1.jpg'

function MainSection() {

  const scrollToShop = () => {
  const section = document.getElementById('shop')

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

  return (
    <section
      id='main'
      className='section-texture h-screen w-screen flex items-center justify-center relative overflow-hidden'

    >
      
      <div className="bg-[#0f0f0f]/80 w-[97%] h-[86%] rounded-3xl mt-[58px] relative overflow-hidden">

        <img 
          src={canImage} 
          alt="" 
          className='absolute w-[55%] -bottom-[280px] left-0 z-10'
        />

        <img 
          src={liquidImage}
          alt=""
          className='absolute w-[40%] -bottom-[270px] left-[340px] rotate-45' 
         />

        <img 
          src={liquidImage}
          alt=""
          className='absolute w-[40%] -bottom-[200px] -left-[140px] -rotate-45' 
         />

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
            <button   onClick={scrollToShop} className=' py-3 px-8 rounded-full bg-primary text-gray-300 font-semibold'>
              Shop Now
            </button>

            <button   onClick={scrollToShop} className='py-3 px-8 rounded-full bg-transparent border border-primary text-gray-300'>
              Explore Flavors
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}

export default MainSection
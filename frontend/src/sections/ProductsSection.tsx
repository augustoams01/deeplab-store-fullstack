import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiWrappedSweet } from "react-icons/gi";
import can2 from '../assets/images/can-section-3.png'

function ProductsSection() {

  const productImages = [1, 2, 3, 4]

  return (

    <section className="section-texture h-screen w-screen overflow-hidden flex items-center justify-center px-8">

      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row items-center gap-10">

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">

          <img
            src={can2}
            alt="Main Product"
            className="w-[52%] max-w-[360px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
          />

        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start justify-center">

          <h2 className="text-4xl mt-10 lg:text-6xl font-black text-gray-200 leading-[1.05] max-w-[700px]">
            Tinned Passion Juice
          </h2>

          <p className="font-bold text-primary text-xs tracking-[0.25em] uppercase">
            Refreshing • Natural • Zero Artificial Calories
          </p>

          <p className="text-gray-300/70 text-base leading-relaxed max-w-[550px]">
            This product has acquired the relevant product qualification and is
            crafted with carefully selected natural ingredients to deliver a
            refreshing and energizing experience.
          </p>

          <div className="flex items-end gap-2 mt-2">

            <h3 className="text-5xl lg:text-6xl font-black text-primary leading-none">
              $6.20
            </h3>

            <span className="text-gray-400 text-base mb-1">
              per can
            </span>

          </div>

          <div className="mt-2 flex flex-col gap-3 w-full">

            <h4 className="text-lg font-bold text-primary">
              Nutrition Facts
            </h4>

            <div className="flex flex-col sm:flex-row gap-3">

              <div className="flex items-center gap-3 bg-dark/70 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md">

                <div className="w-10 h-10 text-primary rounded-full bg-primary/10 flex items-center justify-center">
                  <MdOutlineEnergySavingsLeaf

                    size={20}
                  />
                </div>

                <div>
                  <p className="text-gray-400 text-xs">
                    Calories
                  </p>

                  <span className="text-gray-200 text-sm font-semibold">
                    225 kcal
                  </span>
                </div>

              </div>

              <div className="flex items-center gap-3 bg-dark/70 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md">

                <div className="text-primary w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GiWrappedSweet

                    size={20}
                  />
                </div>

                <div>
                  <p className="text-gray-400 text-xs">
                    Sugar
                  </p>

                  <span className="text-gray-200 text-sm font-semibold">
                    56g
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-4 flex flex-wrap gap-4">

            <button className="px-8 py-3 rounded-full bg-primary text-black font-bold text-base hover:scale-[1.02] transition duration-300">
              Add To Cart
            </button>

            <button className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-black transition duration-300">
              Explore More
            </button>

          </div>

        </div>

      </div>

    </section>

  )
}

export default ProductsSection
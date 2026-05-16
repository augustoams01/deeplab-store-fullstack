function Footer() {
  return (

    <section className="section-texture min-h-screen w-screen flex items-center justify-center px-6 py-16 overflow-hidden relative">

      <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1600px] h-[88vh] rounded-[40px] border border-white/10 bg-[#0f0f0f]/85 backdrop-blur-xl overflow-hidden flex items-center justify-center">

        <div className="relative z-10 max-w-[760px] px-8 text-center flex flex-col items-center">

          <div className="px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em] font-bold">
            Drink Fresh • Live Better
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight text-gray-100">
            Ready To
            <span className="text-primary"> Refresh </span>
            Your Day?
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-[620px]">
            Experience bold flavor, clean ingredients and pure refreshment crafted to energize your lifestyle with every sip.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <button className="px-10 py-4 rounded-full bg-primary text-black font-bold text-base hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.08)]">
              Order Now
            </button>

            <button className="px-10 py-4 rounded-full border border-white/15 bg-white/5 text-gray-200 font-semibold hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              Explore Products
            </button>

          </div>

          <div className="mt-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">
            Free Shipping On Orders Over $50
          </div>

        </div>

      </div>

    </section>

  )
}

export default Footer
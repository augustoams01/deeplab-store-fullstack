const benefits = [
  {
    title: "Instant Refreshment",
    description: "Revives your body and mind with every sip.",
  },
  {
    title: "Natural Energy Boost",
    description: "Keeps you active without the crash.",
  },
  {
    title: "Hydration Support",
    description: "High hydration formula throughout the day.",
  },
  {
    title: "Light & Guilt-Free",
    description: "Enjoy great taste with fewer calories.",
  },
];

export const TestimonialsSection = () => {
  return (

    <section className="section-texture min-h-screen w-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      <div className="w-full max-w-[1450px]">

        <div className=" flex flex-col items-center justify-center">

          <p className="text-primary text-center text-xs tracking-[0.25em] uppercase font-bold">
            Premium Drink Experience
          </p>

          <h2 className="mt-4 text-center text-5xl lg:text-7xl font-black text-gray-200 leading-[1.05]">
            Why You'll
            <span className="text-primary"> Love </span>
            This Drink
          </h2>

          <p className="mt-6 text-gray-300/70 text-center text-lg leading-relaxed">
            Crafted with premium natural ingredients to deliver refreshing taste,
            balanced energy, and a smooth drinking experience every time.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="
                group
                bg-dark/70
                border border-white/10
                rounded-3xl
                p-7
                backdrop-blur-md
                hover:border-primary/40
                hover:-translate-y-1
                transition-all
                duration-300
                min-h-[220px]
                flex
                flex-col
                justify-between
              "
            >
              <div>

                <div className="
                  w-12 h-12
                  rounded-2xl
                  bg-primary/10
                  border border-primary/20
                  flex items-center justify-center
                ">

                  <div className="w-2 h-2 rounded-full bg-primary"></div>

                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-100 leading-tight">
                  {benefit.title}
                </h3>

              </div>

              <p className="mt-8 text-gray-400 leading-relaxed text-sm">
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default TestimonialsSection;
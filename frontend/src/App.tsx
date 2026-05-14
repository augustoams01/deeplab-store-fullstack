import CarrosselSection from './sections/CarrosselSection'
import Footer from './sections/Footer'
import Header from './sections/Header'
import MainSection from './sections/MainSection'
import ProductsSection from './sections/ProductsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import "./index.css";

function App() {

  return (
    <div className='bg-[#232220] overflow-x-hidden'>
      <Header/>
      <MainSection/>
      <CarrosselSection/>
      {/* <ProductsSection/>
      <TestimonialsSection/>
      <Footer/> */}
    </div>
  )
}

export default App

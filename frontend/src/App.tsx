import './App.css'
import CarrosselSection from './sections/CarrosselSection'
import Footer from './sections/Footer'
import Header from './sections/Header'
import MainSection from './sections/MainSection'
import ProductsSection from './sections/ProductsSection'
import TestimonialsSection from './sections/TestimonialsSection'

function App() {

  return (
    <div>
      <Header/>
      <MainSection/>
      <CarrosselSection/>
      <ProductsSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}

export default App

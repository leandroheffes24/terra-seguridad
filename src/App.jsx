import './App.css'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio'
import QueTeOfrecemos from './components/QueTeOfrecemos/QueTeOfrecemos'
import ServiciosYEquipos from './components/ServiciosYEquipos/ServiciosYEquipos'

function App() {
  return (
    <>
      <Header/>
      <Inicio/>
      <QueTeOfrecemos/>
      <ServiciosYEquipos/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App

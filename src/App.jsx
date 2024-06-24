import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Intro from './sections/Intro'
import Cards from './sections/Cards'
import WhoAmI from './sections/WhoAmI'
import Cuidados from './sections/Cuidados'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'
import MoreServices from './pages/MoreServices/MoreServices'
import Price from './pages/Price/Price'
import Footer from './components/header/Footer'

function App() {

  return (
    <div className=' '>
    <Router>
          <Header/>
        <Routes>
          <Route exact path ='/miliNietoEnfermera'element={
            <>
            <Intro/>
            <Cards/>
            <WhoAmI/>
            <Cuidados/>
            <Reviews/>
            <Contact/>
          </>
          }/>
          <Route path='/miliNietoEnfermera/Price' element={<Price/>} />
          <Route path='/miliNietoEnfermera/MoreServices' element={<MoreServices/>} />
          
        </Routes>
        {/* Mirar como terminar de hacer el footer */}
      {/* <Footer/> */}
    </Router>
    </div>
  )
}

export default App

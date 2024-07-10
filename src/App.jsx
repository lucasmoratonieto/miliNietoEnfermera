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
import Results from './pages/Results/Results'
// import Footer from './components/header/Footer'

function App() {

  return (
    <div className=''>
    <Router basename="/">
  
          <Header/>
        <Routes>
          <Route exact path ='/'element={
            <>
            <Intro/>
            <section>
              <Cards/>
            </section>
            <section>
            </section>
            <section>
            <WhoAmI/>
            </section>
            <section>
            <Cuidados/>
            </section>
            <section>
            <Reviews/>
            </section>
            <section>
            <Contact/>
            </section>
          </>
          }/> 
          <Route path='/Price' element={<Price/>} />
          <Route path='/MoreServices' element={<MoreServices/>} />
          <Route path='/Results' element={<Results/>} />
          
        </Routes>
        {/* Mirar como terminar de hacer el footer */}
      {/* <Footer/> */}

    </Router>
    </div>
  )
}

export default App

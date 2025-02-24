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
import Section from './efects'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad/PoliticaPrivacidad'
import AvisoLegal from './pages/AvisoLegal/AvisoLegal'

function App() {

  return (
    <div >
      <Router basename="/">

        <Header />
        <Routes>
          <Route exact path='/' element={
            <>
              <Intro />
              <section>
                <Cards />
              </section>
              <section>
                <WhoAmI />
              </section>
              <section>
                <Section>
                  <Cuidados />
                </Section>
              </section>
              <section>
                <Section>
                  <Reviews />
                </Section>
              </section>
              <section>
                <Section>
                  <Contact />
                </Section>
              </section>
            </>
          } />
          <Route path='/Price' element={<Price />} />
          <Route path='/MoreServices' element={<MoreServices />} />
          <Route path='/Results' element={<Results />} />
          <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />
          <Route path='/aviso-legal' element={<AvisoLegal />} />

        </Routes>
        {/* Mirar como terminar de hacer el footer */}
        {/* <Footer/> */}

      </Router>
    </div>
  )
}

export default App

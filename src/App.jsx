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

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path ='/miliNietoEnfermera'element={
            <>
            <Header/>
            <Intro/>
            <Cards/>
            <WhoAmI/>
            <Cuidados/>
            <Reviews/>
            <Contact/>
          </>
          }/>
          <Route path='/miliNietoEnfermera/MoreServices' element={<MoreServices/>}/>
          
        </Routes>
        <div>Pie de páginas</div>
      </Router>
    </>
  )
}

export default App

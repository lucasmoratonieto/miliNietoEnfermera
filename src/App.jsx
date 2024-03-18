import './App.css'
import Header from './sections/Header'
import Intro from './sections/Intro'
import Cards from './sections/Cards'
import WhoAmI from './sections/WhoAmI'
import Cuidados from './sections/Cuidados'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <Cards/>
      <WhoAmI/>
      <Cuidados/>
      <Reviews/>
      <Contact/>
      <div>Pie de páginas</div>
    </>
  )
}

export default App

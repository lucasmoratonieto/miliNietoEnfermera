
import { navLinks } from '../../constants/index'
import	{logoMili} from "../../assets/images/miliNietoEnfermeraLogo.jpg " 

function Footer() {
  return (
    <footer className=' flex justify-center font-palanquin bg-[#3E3E3E] rounded-3xl' >
      <div>
        <div>
          <img src={logoMili} />
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer
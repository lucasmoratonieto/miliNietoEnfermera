
import { navLinks } from '../../constants/index'
import { contacts } from '../../constants/index'
import {miliLogo} from '../../assets/images/index'


function Footer() {
  return (
    <footer className='flex font-palanquin bg-[#3E3E3E] rounded-t-3xl' > {/* //for all rounded rounded-3xl*/}
      <div className=' flex m-5 items-center gap-5 max-sm:flex-col  '>
        <div className=''>
          {/* <img src={logoMili} /> */}
          <img src={miliLogo} alt="Logo mili" width={80} className=' min-w-14 rounded-3xl'/>
        </div>
        <div className=' flex flex-wrap items-center max-sm:justify-center'>
        {navLinks.map((navLink) =>(
                <li key={navLink.href} className='flex w-28 text-white '>
                  <a href={navLink.href} key={navLinks.src}>
                    {navLink.label}
                  </a>
                </li>
              ))}
        </div>
        <div className='flex-col flex-wrap'>
          {contacts.map((contact) =>(
                <li key={contact.href} className='flex w-98 text-white w '>
                  <a href={contact.href} key={contact.src}>
                    {contact.label}: {contact.text}
                  </a>
                </li>
              ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
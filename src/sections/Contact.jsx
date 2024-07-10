import {contacts, socialMedia} from '../constants/index'
import { useState } from 'react'
import EmailForm from '../components/emailForm/EmailForm'

function Contact() {

  const [menuSmall, setMenuSmall] = useState(false);
  const toggleMenu = () => {
    setMenuSmall(!menuSmall)
  }

  return (
    <section id="contactos" className=' mb-10'>
      <div className=' text-4xl  mb-10 font-montserrat pt-10'>
        Contacto
      </div>
      <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-10 font-palanquin '>
        <div className=' flex-col content-center p-10 border rounded-3xl '>
          <div className=' flex justify-center '>
            <p>Servicio en la comunidad de Madrid</p>
          </div>
          <div className='flex flex-col'>
            {contacts.map((conatct1)=> (
              <a href={conatct1.href} key={conatct1.alt} target='_blank'>
                {conatct1.label}: {conatct1.text} 
              </a>
            ))}

          </div>
          <div className=' flex justify-center mt-5 space-x-5'>
            {socialMedia.map((contact) => (
              <div className='flex'>
                <a href={contact.href} key={contact.label} target="_blank">
                  <img src={contact.src} alt={contact.alt} width={50} />
                </a>
                  
              </div>
            ))}
          </div>
        </div>
        <div className='flex  p-10 justify-center border  rounded-3xl'>
          <EmailForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact
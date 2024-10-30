import {contacts, socialMedia} from '../constants/index'
import { useState } from 'react'
import EmailForm from '../components/emailForm/EmailForm'

function Contact() {

  return (
    <section id="contactos" className=' mb-10'>
      <div className=' text-4xl  mb-10 font-montserrat pt-10'>
        Contacto
      </div>
      <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-10 font-palanquin text-lg '>
        <div className=' flex-col content-center p-10 border rounded-3xl shadow-3xl
        sm:duration-1000 sm:ease-in-out sm:transform sm:hover:shadow-3xl sm:hover:shadow-slate-500 sm:hover:-translate-y-2 sm:hover:translate-x-2 '>
          <div className=' flex justify-center '>
            <p>Servicio en la comunidad de Madrid</p>
          </div>
          <div className='flex flex-col'>
            {contacts.map((contact)=> (
              <a href={contact.href} key={contact.key} target='_blank'>
                {contact.label}: {contact.text} 
              </a>
            ))}

          </div>
          <div className=' flex justify-center mt-5 space-x-5
           '>
            {socialMedia.map((eachSocialMedia) => (
              <div className='flex 
              '>
                <a href={eachSocialMedia.href} key={eachSocialMedia.key} target="_blank">
                  <img src={eachSocialMedia.src} alt={eachSocialMedia.alt} key={eachSocialMedia.key}  width={50} />
                </a>
                  
              </div>
            ))}
          </div>
        </div>
        <div className='flex  p-10 justify-center border
        rounded-3xl shadow-3xl
        sm:duration-1000 sm:ease-in-out sm:transform sm:hover:shadow-3xl sm:hover:shadow-slate-500 sm:hover:-translate-y-2 sm:hover:translate-x-2 '>
          <EmailForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact

import {contacts, socialMedia} from '../constants/index'

function Contact() {
  return (
    <section id="contactos" className=' my-10'>
      <div className=' text-5xl font-montserrat mb-10'>
        Contacto
      </div>
      <div className=' flex gap-10'>
        <div className=' w-[50%] p-10 border rounded-3xl '>
          <div className='flex justify-center '>
            <p>Servicio en la comunidad de Madrid</p>
          </div>
          <div className='flex flex-col'>
            {contacts.map((conatct1)=> (
              <a href={conatct1.href} key={conatct1.alt} target='_blank'>
                {conatct1.label}: {conatct1.text} 
              </a>
            ))}

          </div>




          <div className=' flex justify-center'>
            {socialMedia.map((contact) => (
              <div className='flex flex-row'>
                <a href={contact.href} key={contact.label} target="_blank">
                  <img src={contact.src} alt={contact.alt} width={50} />
                </a>
                  
              </div>
            ))}
          </div>
        </div>
        <div className='flex w-[50%] p-10 justify-center border  rounded-3xl'>
          Form of mail
        </div>
      </div>
    </section>
  )
}

export default Contact
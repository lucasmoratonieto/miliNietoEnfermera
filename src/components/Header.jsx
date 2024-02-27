import '../App.css'

function Header() {
  return (
    <header className=' flex justify-center' >
        <div className=''>
            <ul className=" flex flex-row gap-2 lg:gap-8 xl:gap-20 sm:">
                <li className=' w-28'>Inicio</li>
                <li className=' w-28'>Precio</li>
                <li className=' w-28'>Servicios</li>
                <li className=' w-28'>¿Por qué Mili?</li>
                <li className=' w-28'>Resultados</li>
                <li className=' w-28'>Contactos</li>
                <li className=' w-28'>677551276 WhatsApp</li>
            </ul>
        </div>
    </header>
  )
}

export default Header
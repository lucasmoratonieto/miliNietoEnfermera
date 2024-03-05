import { miliDescription } from "../assets/images"

function WhoAmI() {
  return (
    <section className="bg-[#e8eff1] flex flex-row max-lg:flex-col items-center gap-10 ">
        <div className=" my-10 max-lg:mt-7 max-lg:mb-0">
                <h1 className=" text-5xl p-5 whitespace-nowrap ">¿Quién soy?</h1>
                <div className=" m-10 text-start ">
                    <p>Mi nombre es Emilia Nieto de la Cierva. Soy diplomada por la Universidad Pontificia de Comillas y miembro del Colegio de Enfermería de Madrid. </p><br />
                    <p>A lo largo de mis más de 25 años de profesión, he desarrollado mi actividad profesional abarcando desde la oncología pediátrica, al área quirúrgica o los cuidados en pacientes adultos, lo que me ha permitido desarrollar una visión global de la práctica de la enfermería.  </p> <br />
                    <p>En los últimos años, he percibido en mi entorno el valor añadido que aporta tener a alguien de confianza capaz de resolver tareas propias de mi oficio, desde la realización de una extracción para una analítica a la toma de constantes o la revisión de pautas de tratamiento, en la comodidad del propio hogar, pero asegurando siempre una atención de la máxima calidad profesional y humana.</p><br />
                    <p>Por ello, he puesto en marcha este servicio, con objeto de ofrecer lo mejor de mi trabajo en la calidez de tu propio domicilio.</p>
                </div>
            </div>
            <div className="flex justify-center lg:mr-10 max-lg:mb-10">
                {miliDescription.map((imagen)=>(
                    <img src={imagen.src} alt={imagen.alt} key={imagen.alt} className=" min-w-[350px] "/>
                ))}
            </div>
    </section>
  )
}

export default WhoAmI
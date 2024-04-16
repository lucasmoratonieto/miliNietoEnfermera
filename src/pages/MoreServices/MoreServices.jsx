import HeaderNotPrincipal from "../../components/headerNotPrincipal/HeaderNotPrincipal"
import {miliCholo} from "/Users/Lucas/OneDrive/Documentos/GitHub/miliNietoEnfermera/src/assets/images"
import { masServicios } from "../../constants"

function 	moreServices() {
  return (
    <section className="">
      <HeaderNotPrincipal/>
      <div className="flex flex-col items-center mt-10 max-md:flex max-md:flex-col gap-4  pt-10  rounded-t-2xl max-sm:rounded-b-2xl ">
        <h1 className=" text-4xl font-bold font-montserrat">
          Servicios principales y a medida
        </h1>
        <div className="flex mt-10 gap-5 items-center max-lg:flex-col">
          <div className=" text-left bg-[#e8eff1] p-5 rounded-3xl gap-10 min-w-[500px]">
            <p className="m-5 text-2xl text-center">
            Cuidados contínuos, ocasionales o puntuales de enfermería profesional
            </p> 
            <div className="mx-5 pl-12 text-lg">
              {masServicios.map ((masServicio)=>(
                <ul className="max-w-md space-y-1 list-disc  ">
                  <li className="">{masServicio.text}</li>
                </ul>
              ))}
            </div>
          </div>
            {miliCholo.map((image) =>(
              <img src={image.src} alt={image.alt} className=" rounded-3xl max-xl:max-h-[300px] max-lg:max-h-[450px]"/>

            ))}          
        </div>
      </div>
    </section>
  )
}

export default 	moreServices
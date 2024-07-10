
// import {miliCholo} from "/Users/Lucas/OneDrive/Documentos/GitHub/miliNietoEnfermera/src/assets/images"
import Contact from "../../sections/Contact"
// import { LogInSynLab } from "../../assets/images"
import images from '../../assets/images/images'



function Results() {
  return (
    <section className="">
      <div className="flex flex-col items-center  max-md:flex max-md:flex-col gap-4  pt-5  rounded-t-2xl max-sm:rounded-b-2xl ">
        <h1 className=" text-4xl font-bold font-montserrat">
        Resultados
        </h1>
      </div>


      <div className=" mt-10">
        <h2 className=" text-2xl ">
        En usuario deberá poner el DNI sin la letra <br />
        En Password el numero de petición con la letra en mayusculas
        </h2>
          <button type="results" className=" p-0 mt-10 relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#b9f6ca]  group-hover:from-green-400 group-hover:to-blue-600 hover:text-black  ">
            <span class="relative px-6 py-2.5 transition-all ease-in duration-200 bg-[#e8eff1] dark:bg-[#e8eff1] rounded-md group-hover:bg-opacity-0">
              <a href="https://informes.synlab.es/" target="_blank">
                Resultados
              </a>
            </span>
        	</button>
      <div className="flex justify-center ">
       <img src={images.LogInSynLab} alt='first image' width={400} className=" "/>
      </div>
          <p className=" mt-10">
            Si tiene cualquier tipo de problema, no dude en enviarme un email desde la sección de contactos
          </p>
      </div>
    
      <Contact/>
    </section>
  )
}

export default Results
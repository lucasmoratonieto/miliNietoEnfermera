import {miliOperando} from '../assets/images/index'


function Intro() {
  return (
    <main className="flex items-center justify-center mt-10 max-md:flex max-md:flex-col gap-4 bg-[#e8eff1] pb-20 pt-10">
        <div className=" z-10 relative align-middle justify-center sm:whitespace-nowrap text-gray-800">
            <h1 className=" text-9xl font-semibold font-Arial max-lg:text-8xl mb-10 max-md:mb-5">Mili Nieto</h1>
            <h3 className=" text-3xl mb-10 max-md:mb-5 max-lg:text-2xl">Tu Enfermera de Confianza a Domicilio.</h3>
        </div>
        <div className="relative">
          {miliOperando.map ((image) =>(
            <img src={image.src} alt={image.alt} key={image.alt} />
          ))}
            {/* <img src="https://static.wixstatic.com/media/ae3d5a_57d083ebf95945f0b1e49f62617afa4d~mv2.png/v1/fill/w_219,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2021-10-13-17-47-39%20copia_edited.png" alt="Imangen de Emilia en el Quirófano" className=" min-w-60"/> */}
        </div>
    </main>
  )
}

export default Intro
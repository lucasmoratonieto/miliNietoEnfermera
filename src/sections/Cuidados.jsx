import { cuidados } from "../constants"

function Cuidados() {
  return (
    <section className=" flex flex-col my-10 gap-10 items-center">
        <h1 className=" text-5xl">¿Qué tipo de cuidados hago?</h1>
        <p className=" w-[44%] text-xl max-sm:w-[90%] ">La clave es que nos adaptamos a cada paciente, en este apartado pongo los principales pero no dudes en preguntarnos, si lo que buscas no esta aquí</p>
        <ul className=" gap-5 grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:items-center ">
            {cuidados.map((cuidado) => (
                <li key={cuidado} className="p-5 rounded-3xl min-w-40 shadow-3xl shadow-slate-200 ">
                    <div className="flex flex-col">
                        {/* <h1 className="text-3xl">{cuidado.number}</h1> */}
                        <p className=" text-xl h-40 max-sm:h-32 flex lg:items-center items-center justify-center">{cuidado.text}</p>
                    </div>
                </li>
            ))}
        </ul>
        <button>Leer más</button>
    </section>
  )
}

export default Cuidados
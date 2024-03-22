import { useEffect, useState } from "react"
import { quotation } from "../assets/icons";


function Reviews() {

    const [showText, setShotText] = useState(true)
    useEffect (() =>{
        const intervalChangeReview = setInterval(() =>{
            setShotText((showText) => !showText);
        },5000);

        return () => clearInterval(intervalChangeReview);
    }, [])

  return (
    <div className=" bg-[#ffe2e9] h-96 rounded-2xl font-palanquin flex justify-center pt-10">
      <div className="flex items-center h-20 w-40 justify-start">
        <img src={quotation} alt="quotation marks" className="w-10 transform scale-y-[-1] scale-x-[-1] absolute"/>
      </div>
      <div className="flex items-center">
        <div className={` ${showText ? 'block' : 'hidden'} flex flex-col items-center gap-10`}>
          <p className={`text-4xl max-sm:text-3xl justify-center max-w-[35rem] mx-5`}>PCR con entrega en el mismo día, fundamental si te tienes que ir de viaje y lo necesitas rápido</p>
          <p className="">Elena 28 años</p>
          <div className="flex gap-2">
            <div className=" bg-gray-300 h- w-3 rounded-full"/>
            <div className=" bg-gray-50 h-3 w-3 rounded-full"/>
          </div>
          
        </div>
        <div className={` ${showText ? 'hidden' : 'block'} flex flex-col items-center gap-10`}>
            <p className={`text-4xl max-sm:text-3xl justify-center max-w-[35rem] mx-5`}>Siempre agradecido a Mili por su apoyo en los momentos más  complicados y su delicadeza en los pinchazos</p>
            <p className="">Patricia 74 años</p>
            <div className="flex gap-2">
              <div className=" bg-gray-50 h- w-3 rounded-full"/>
              <div className=" bg-gray-300 h-3 w-3 rounded-full"/>
          </div>
          </div>
      </div>
      <div className="flex items-center h-20 w-40 justify-end">
        <img src={quotation} alt="quotation marks" className="w-10 absolute"/>
      </div>
    </div>
  )
}

export default Reviews



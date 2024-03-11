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
    <div className=" bg-[#ffe2e9] h-96  flex justify-center items-center">
        <img src={quotation} alt="quotation marks" className="w-10 transform scale-y-[-1] scale-x-[-1] absolute"/>
        <div className={` ${showText ? 'block' : 'hidden'} text-4xl justify-center max-w-[35rem]`}>PCR con entrega en el mismo día, fundamental si te tienes que ir de viaje y lo necesitas rápido</div>
        <div className={` ${showText ? 'hidden' : 'block'} text-4xl justify-center max-w-[35rem]`}>Siempre agradecido a Mili por su apoyo en los momentos más complicados y su delicadeza en los pinchazos</div>
        

    </div>
  )
}

export default Reviews



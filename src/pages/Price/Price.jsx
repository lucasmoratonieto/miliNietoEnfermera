
// import {miliCholo} from "/Users/Lucas/OneDrive/Documentos/GitHub/miliNietoEnfermera/src/assets/images"
import Contact from "../../sections/Contact"
import { priceInfo } from "../../constants"
import { ContpriceInfo } from "../../constants"
import { analiticasPriceInfo } from "../../constants"

function Price() {
  return (
    <section className="">
      <div className="flex flex-col items-center  max-md:flex max-md:flex-col gap-4  pt-5  rounded-t-2xl max-sm:rounded-b-2xl ">
        <h1 className=" text-4xl font-bold font-montserrat">
          Precios
        </h1>
      </div>
      <div className="flex mt-10 gap-5 justify-center ">
          <div className=" t bg-[#c4e2eb] p-5 rounded-3xl gap-10 min-w-[400px]">
            {priceInfo.map((eachpriceInfo)=>(
              <ul className=" space-y-5 m-5 text-xl max-sm:text-lg text-center">
                <li><b>{eachpriceInfo.title}</b>{eachpriceInfo.text}</li>
              </ul>
            ))}

          </div>
        </div>
        <div className="flex flex-col items-center gap-4  pt-10  rounded-t-2xl max-sm:rounded-b-2xl ">
        <h2 className=" text-3xl font-bold font-montserrat">
          Cuidados continuos
        </h2>
      </div>
      <div className="flex mt-10 gap-5 justify-center ">
          <div className="flex-col max-sm:flex-col bg-[#d2eed4] p-5 rounded-3xl gap-10 min-w-[400px]">
            <div className="flex justify-center">
            {ContpriceInfo.map((eachContpriceInfo) =>(
              <ul className=" gap-40 max-md:gap-24 max-sm:flex-col max-sm:gap-10 m-5 text-xl text-center">
                <li>
                  <b>{eachContpriceInfo.text}</b>
                    <ul className=" text-lg">
                      <li>{eachContpriceInfo.price}</li>
                    </ul>
                </li>
              </ul>

              ))}
            </div>
            {analiticasPriceInfo.map((eachanaliticasPriceInfo) =>(
              <ul className=" gap-40 max-md:gap-24 max-sm:flex-col max-sm:gap-10 m-5 text-xl text-center">
                <li>
                  <b>{eachanaliticasPriceInfo.text}</b>
                    <ul className=" text-lg">
                      <li>{eachanaliticasPriceInfo.price}</li>
                      <li>{eachanaliticasPriceInfo.price2}</li>
                      <li>{eachanaliticasPriceInfo.price3}</li>
                    </ul>
                </li>
              </ul>

            ))}
          </div>
        </div>
      <Contact/>
    </section>
  )
}

export default Price
import { cards } from "../constants/index"


function Cards() {
    const colors = ["bg-[#ccc6c6]", "bg-[#f0eded]", "bg-[#fadcd6]", "bg-[#e5c7b5]"];
    const roundebBox = ["rounded-bl-2xl", "", "", "rounded-br-2xl"]
    const roundebBoxsmall = ["", "", "rounded-bl-2xl", "rounded-br-2xl"]

    // const roundeBg = ["rounded-2xl", ""];
  return (
    <main id="porqueMili" className=" font-montserrat ">
        <ul className=" grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {cards.map((card, index) =>(
                <li key={card.number} className={`${colors[index]} ${roundebBox[index]}  max-sm:rounded-2xl max-sm:mt-4 
                sm:duration-1000 sm:ease-in-out sm:transform sm:hover:shadow-3xl sm:hover:shadow-slate-500 sm:hover:-translate-y-2`}>
                    <div className={`p-5 flex flex-col `}>
                        <h1 className=" text-3xl font-bold p-2">{card.number}</h1>
                        <h2 className=" text-2xl p-5 h-32 flex items-center justify-center">{card.title}</h2>
                        <p className="h-40 flex lg:items-center justify-center">{card.text}</p>
                        {/* Try to put the line at the end or  in the same line */}
                        {/* <div className="">-------------</div> */}
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Cards
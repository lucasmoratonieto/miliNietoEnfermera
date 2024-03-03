import { cards } from "../constants/index"


function Cards() {
    const colors = ["bg-[#ccc6c6]", "bg-[#f0eded]", "bg-[#fadcd6]", "bg-[#e5c7b5]"];
  return (
    <main className="bg-">
        <ul className=" grid grid-cols-4">
            {cards.map((card, index) =>(
                <li key={card.number} className=" border">
                    <div className={`p-5 border ${colors[index]}`}>
                        <h1 className=" text-3xl font-bold">{card.number}</h1>
                        <h2 className=" text-2xl p-5">{card.title}</h2>
                        <p>{card.text}</p>
                        <div>-------------</div>
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Cards
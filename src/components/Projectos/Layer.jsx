

export const Layer = ({proyectos, currentImage})=> {


    return (
        <div className="w-10/12 h-72 rounded-lg relative">
            {
                proyectos.map((items, index) => (
                    <div key={items.id} className="w-full h-full absolute">
                        <div className={`flex flex-row gap-5 ${index === currentImage ? "opacity-100 transition duration-200" : "opacity-0 transition duration-200"}`}>
                            {
                                items.tecnologias.map(tech=> (
                                    <span className="p-1 rounded-md bg-backgroundSecond text-backgroundPrimary font-semibold">{tech}</span>
                                ))
                            }
                        </div>
                        <div className="w-full h-full flex flex-row mt-2 justify-center items-center absolute">
                                <figure className="w-full h-full relative">
                                    <img
                                        key={index}
                                        className={`w-full h-full absolute rounded-lg ${index === currentImage ? "opacity-100 transition duration-200" : "opacity-0 transition duration-200"}`}
                                        src={items.image}
                                        alt={`Image ${items.id}`} />
                                </figure>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export const Layer = ({proyectos, currentImage})=> {


    return (
        <div className="w-10/12 h-full rounded-lg relative">
            {
                proyectos.map((items, index) => (
                    <div key={items.id} className={`w-full h-80 absolute ${index === currentImage ? "opacity-100 transition duration-200" : "opacity-0 transition duration-200"}`}>
                        <div className={`w-full flex flex-row gap-5`}>
                            {
                                index === currentImage &&
                                items.tecnologias.map((tech, techIndex)=> (
                                        <span key={techIndex} className={`w-fit h-fit p-1 rounded-md bg-backgroundSecond text-backgroundPrimary font-semibold`}>{tech}</span>
                                ))

                            }
                            
                            <a href={items.url} target="_blank" rel="noopener noreferrer" className={`w-fit h-fit p-1 rounded-md bg-slate-400 text-yellow-50`}>website</a>
                        </div>
                        <div className={`w-full h-full flex flex-row max-md:flex-col mt-5 gap-5 justify-center items-start `}>
                                <figure className="w-full h-full">
                                    <img
                                        className={`w-full h-full rounded-lg object-fill`}
                                        src={items.image}
                                        alt={`Image ${items.id}`} />
                                </figure>
                                <div className="w-full h-full flex flex-col items-start">
                                    {
                                        items.detail.map((parrafo, parrafoIndex)=> (
                                            <p key={parrafoIndex} className={``}>{parrafo}</p>
                                        ))
                                    }
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
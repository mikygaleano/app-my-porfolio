

export const Cards = ({proyectos})=> {


    return (
        <div className="w-10/12 h-full rounded-lg flex flex-col gap-16">
            {
                proyectos.map((items) => (
                    <div key={items.id} className='w-full h-full flex flex-col'>
                        <h4 className="text-left text-xl font-bold text-slate-700 mb-5">{items.title}</h4>
                        <div className='w-full flex flex-row flex-wrap gap-5'>
                            {
                                items.tecnologias.map((tech, techIndex)=> (
                                        <span key={techIndex} className='w-fit h-fit p-1 rounded-md bg-backgroundSecond text-backgroundPrimary font-semibold'>{tech}</span>
                                ))

                            }
                            
                            <a href={items.url} target="_blank" rel="noopener noreferrer" className='w-fit h-fit animate-backgroundGradientAnimation rounded-lg shadow-xl p-1 text-black'>sitio web</a>
                        </div>
                        <div className='w-full h-full flex flex-col mt-5 gap-5'>
                                <figure className="w-full border-sky-100 rounded-lg shadow-lg p-1">
                                    <img
                                        className='w-full h-full rounded-lg object-cover'
                                        src={items.image}
                                        alt={`Image ${items.id}`} />
                                </figure>
                                <div className="w-full flex flex-col items-start">
                                    {
                                        items.detail.map((parrafo, parrafoIndex)=> (
                                            <p key={parrafoIndex} className='text-sm text-slate-500 font-semibold'>{parrafo}</p>
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
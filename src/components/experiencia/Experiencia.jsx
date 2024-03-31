

export const Experiencia = ({exper})=> {

    return (
        <section className="w-full min-h-full flex flex-col items-center" id="experiencia">
            <div className="w-10/12 h-fit flex flex-1 flex-col">
                <h2 className="-ml-2 font-semibold text-3xl">💼 Experiencia laboral</h2>
                <div className="h-fit flex flex-col items-center mt-5">
                    <div className="w-full h-fit flex flex-col gap-10 border-l border-slate-300">
                        {
                        
                            exper.map(item => (
                                <article key={item.id} className="w-full h-fit relative -left-1.5 mt-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-black relative"></div>
                                        <h4 className="text-blue-600 font-semibold text-xs">{item.fecha}</h4>                            
                                    </div>
                                    <div className="max-w-fit p-5">
                                        <h4 className="text-orange-700 font-semibold text-xl">{item.puesto}</h4>
                                        {
                                            item.parrafo.map((linea, index) => (
                                                <p key={index} className="font-semibold text-xl">{linea}</p>
                                            ))
                                        }
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
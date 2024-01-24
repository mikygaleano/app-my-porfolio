

export const Experiencia = ()=> {

    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <div className="w-10/12 h-fit flex flex-1 flex-col">
                <h3 className="-ml-2">👜 Experiencia laboral</h3>
                <div className="h-fit flex flex-col items-center mt-5">
                    <div className="w-full h-fit flex flex-col gap-10 border-l">
                        <article className="w-full h-fit relative -left-1.5 mt-2">
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-black relative"></div>
                                <h4 className="text-blue-600 font-semibold text-xs">Actualmente...</h4>                            
                            </div>
                            <div className="max-w-fit p-5">
                                <h4 className="text-orange-700 font-semibold">Full stack developer web</h4>
                                <p>Desarrollo aplicaciones web de manera frelance</p>
                            </div>
                        </article>
                        <article className="w-full h-fit relative -left-1.5">
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-black relative"></div>
                                <h4 className="text-blue-600 font-semibold text-xs">Marzo 2023</h4>                            
                            </div>
                            <div className="max-w-fit p-5">
                                <h4 className="text-orange-700 font-semibold">Frontend developer web</h4>
                                <p className="">Fui integrante, como desarrollador<br />
                                    en un equipo de la startup identikit app.</p>
                                <p>Para desarrollar una web informativa para una aseguradora</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
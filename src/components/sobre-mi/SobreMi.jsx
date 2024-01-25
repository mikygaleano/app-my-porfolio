

export const SobreMi = ()=> {

    return (
        <section className="w-full h-full flex flex-col items-center gap-5">
            <div className="w-10/12 h-fit ">
                <h3 className="font-semibold text-3xl">👤 Sobre mi</h3>
            </div>
            <div className="w-10/12 h-fit gap-5 font-semibold text-xl flex flex-row max-md:flex-col-reverse justify-center items-center pb-5">
                <div className="w-1/2 max-md:w-full">
                    <p>Estoy en el segundo año de la carrera  <span className="text-backgroundSecond">ing. en informatica </span>
                        en la <span className=" text-orange-700">Universidad Nacional de Avellaneda (UNDAV)</span></p>
                        <p className="text-yellow-400">Mi servicio es el desarrollo de landing page
                        o paginas web para emprendedores o pequeños comercios</p>
                        <p className="text-yellow-400">Incluye pagina de inicio, secciones de sobre mi, presentacion,
                        contacto, servicio, producto, links a redes sociales
                    </p>   
                </div>
                <figure className="w-1/2 max-md:w-full h-72 flex justify-center">
                    <img className="w-72 h-72 object-contain rounded-full bg-backgroundPrimary" src="./image/perfil.png" alt="avatar" />    
                </figure> 
            </div>
        </section>
    )
};
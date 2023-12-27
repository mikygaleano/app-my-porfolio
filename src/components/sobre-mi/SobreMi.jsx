

export const SobreMi = ()=> {

    return (
        <section className="w-full h-full bg-black flex justify-center items-start mt-5">
            <div className="w-3/4 max-md:w-full h-full grid place-content-center grid-cols-2 gap-1 p-1 max-sm:p-0">
                <div className="w-full h-3/4 text-slate-300 col-end-2 flex flex-1 flex-col max-md:flex-row max-sm:flex-col justify-center items-start max-md:col-span-2 p-5 gap-2">
                    <p>Estoy en el segundo año de la carrera ing. en informatica <br />
                    en la Universidad Nacional de Avellaneda (UNDAV)</p>
                    <p>Mi servicio es el desarrollo de landing page <br />
                    o paginas web para emprendedores o pequeños comercios</p>
                    <p>Incluye pagina de inicio, secciones de sobre mi, presentacion <br />
                    contacto, servicio, producto, links a redes sociales</p>
                    <p>No incluye el dominio personalizado <br />
                    Si el hospedaje estatico</p>
                </div>
                <figure className="w-full h-full flex justify-center items-center max-md:ml-20">
                    <img src="./public/image/desarrollo-web.png" alt="desarrollo" />
                </figure>
            </div>
        </section>
    )
};



export const SobreMi = ()=> {

    return (
        <section className="w-full min-h-full flex flex-col items-center gap-5" id="sobre-mi">
            <div className="w-10/12 h-fit">
                <h3 className="font-semibold text-3xl">👤 Sobre mi</h3>
            </div>
            <div className="w-10/12 h-fit gap-5 font-semibold text-xl flex flex-row max-md:flex-col-reverse justify-center items-center pb-5">
                <div className="w-1/2 max-md:w-full">
                    <p className="text-backgroundSecond">Estoy en el segundo año de la carrera  <span className="text-yellow-400">ing. en informatica </span>
                        en la <span className=" text-orange-700">Universidad Nacional de Avellaneda (UNDAV)</span></p>
                        <p>Desde muy joven, me he sentido atraído por la tecnología y la programación, y he encontrado en ellas mi verdadera vocación.</p>
                        <p>Mi viaje en el mundo de la tecnología ha sido emocionante y enriquecedor. He dedicado incontables horas a estudiar y practicar desarrollo web, así como a explorar las infinitas posibilidades que ofrece este campo en constante evolución.</p>
                        <p>Además de mi amor por la tecnología, soy un entusiasta del deporte y la actividad física. Creo firmemente en el equilibrio entre mente y cuerpo, y por eso me esfuerzo por mantenerme activo y saludable en mi día a día. Mis intereses van desde el fútbol hasta las artes marciales mixtas (MMA), y disfruto participando y aprendiendo de diversas disciplinas deportivas.</p>
                        <p>Mi objetivo es convertirme en un programador e ingeniero altamente capacitado y contribuir de manera significativa al mundo de la tecnología. Estoy constantemente buscando oportunidades para expandir mis conocimientos y habilidades, ya sea a través de proyectos personales, colaboraciones en equipo o experiencias educativas.</p>
                        <p>Estoy emocionado por lo que el futuro me depara en este apasionante campo y estoy listo para enfrentar nuevos desafíos y oportunidades de crecimiento. ¡Gracias por visitar mi portafolio y por permitirme compartir un poco sobre mí!</p>   
                </div>
                <figure className="w-1/2 max-md:w-full h-72 flex justify-center">
                    <img className="w-72 h-72 object-contain rounded-full bg-backgroundPrimary" src="./image/perfil.png" alt="avatar" />    
                </figure> 
            </div>
        </section>
    )
};
import { proyectos } from "../../constantes";
import { Cards } from "./Cards"

export const Proyectos = ()=> {


    return (
        <section className="w-full min-h-full flex flex-col" id="proyectos">
            <div className="w-10/12 h-fit self-center">
                <h3 className="font-semibold text-3xl">💻 Mis proyectos</h3>
            </div>
            <div className="w-full h-full flex flex-col items-center mt-5">
                <Cards proyectos={proyectos}/>
                
            </div> 
        </section>
    )
}
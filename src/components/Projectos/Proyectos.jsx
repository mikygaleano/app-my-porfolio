import { proyectos } from "../../constantes";
import { Cards } from "./Cards"

export const Proyectos = ()=> {


    return (
        <section className="w-full min-h-full flex flex-col gap-5" id="proyectos">
            <div className="w-10/12 h-fit self-center">
                <h2 className="font-semibold text-3xl">💻 Mis proyectos</h2>
            </div>
            <div className="w-full h-full flex flex-col items-center mt-5">
                <Cards proyectos={proyectos}/>     
            </div> 
        </section>
    )
}
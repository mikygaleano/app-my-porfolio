import { proyectos } from "../../constantes";
import { useLayer } from "../../hooks/useLayer";
import { Layer } from "./Layer"

export const Proyectos = ()=> {

    const { handleNextClick, handlePrevClick, currentImage } = useLayer(proyectos);


    return (
        <section className="w-full min-h-full flex flex-col gap-3">
            <div className="w-10/12 h-fit self-center">
                <h3 className="font-semibold text-3xl">💻 Mis proyectos</h3>
            </div>
            <div className="w-full h-full flex flex-col items-center mt-5">
                <Layer proyectos={proyectos} currentImage={currentImage}/>
            </div>
            <div className="w-10/12 self-center mt-8 flex flex-row justify-between items-center p-2">
                <button className="z-10 w-28 h-12 flex items-center justify-center p-2 text-slate-500 rounded-md bg-slate-400 bg-opacity-5 hover:bg-opacity-10" onClick={handlePrevClick}>Previo</button>
                <button className="z-10 w-28 h-12 flex items-center justify-center p-2 text-slate-500 rounded-md bg-slate-400 bg-opacity-5 hover:bg-opacity-10" onClick={handleNextClick}>Siguiente</button>
            </div>
        </section>
    )
}
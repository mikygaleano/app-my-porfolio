import { Astronauta } from "./Astronauta"


export const Presentation = ()=> {
    
    return (
        <div className="w-full h-fit flex flex-row max-md:flex-col justify-between row-end-2 col-span-3">
            <Astronauta />
            <div className="w-full p-5 flex flex-col justify-start items-start gap-2 bg-backgroundSecond rounded-lg">
                <div className="w-full flex flex-col gap-2 max-w-md font-[open-display]">
                    <h2 className="font-black text-5xl text-backgroundPrimary">Hola!! soy</h2>
                    <p className=" text-slate-300">un apasionado programador en constante evolución</p>
                    <p className=" text-slate-300">estudiante de Ingeniería en Informática en la Universidad Nacional de Avellaneda (UNDAV)</p>
                </div>
                <button className="self-start bg-primaryLigth p-2 rounded-sm text-slate-500 font-black">Leer más</button>
            </div>
        </div>
    )
}
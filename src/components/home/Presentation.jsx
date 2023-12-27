

export const Presentation = ()=> {
    
    return (
        <div className="w-full h-full row-span-2 col-end-2 flex flex-row items-center">
            <div className="w-full p-5 flex flex-col justify-start items-start gap-2 rounded-lg">
                <div className="w-full flex flex-col gap-2 max-w-md font-[open-display]">
                    <h2 className="font-black text-5xl max-sm:text-lg text-backgroundPrimary">Hola!! soy</h2>
                    <p className=" text-slate-300 max-md:text-sm">un apasionado programador en constante evolución</p>
                    <p className=" text-slate-300 max-md:text-sm">desarrollador de paginas web</p>
                </div>
                <button className="self-start font-[open-display] bg-primaryLigth p-2 rounded-sm text-slate-500 font-black">Leer más</button>
            </div>
        </div>
    )
}
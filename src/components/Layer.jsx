import { useLayer } from "../hooks/useLayer"
import { images } from "../constantes"


export const Layer = ()=> {

    const { handleNextClick, handlePrevClick, currentImage } = useLayer(images);

    return (
        <div className="w-full h-72 row-end-3 relative rounded-lg">
            <div className="w-full h-full flex absolute">
                <figure>
                    {images.map((motion, index) => (
                        <img
                        key={index}
                        className={`w-full h-full absolute rounded-lg ${index === currentImage ? "opacity-100 transition duration-200" : "opacity-0 transition duration-200"}`}
                        src={motion}
                        alt={`Image ${index + 1}`}
                        />
                    ))}
                </figure>
                <div className="w-full flex justify-between items-center p-2">
                    <button className="z-10 w-28 h-12 flex items-center justify-center p-2 text-slate-500 rounded-md bg-slate-400 bg-opacity-5 hover:bg-opacity-10" onClick={handlePrevClick}>Previo</button>
                    <button className="z-10 w-28 h-12 flex items-center justify-center p-2 text-slate-500 rounded-md bg-slate-400 bg-opacity-5 hover:bg-opacity-10">Ver</button>
                    <button className="z-10 w-28 h-12 flex items-center justify-center p-2 text-slate-500 rounded-md bg-slate-400 bg-opacity-5 hover:bg-opacity-10" onClick={handleNextClick}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
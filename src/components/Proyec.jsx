import { useLayer } from "../hooks/useLayer"
import { images } from "../constantes"


export const Proyect = ()=> {

    const { handleNextClick, handlePrevClick, currentImage } = useLayer(images);

    return (
        <div className="w-full h-72 row-end-3 relative rounded-lg">
            <h3 className="text-white text-center">Proyectos</h3>
            <div className="w-full h-full flex absolute">
                <figure className="">
                {images.map((motion, index) => (
                    <img
                    key={index}
                    className={`w-full h-full absolute rounded-lg ${index === currentImage ? "opacity-100 transition duration-200" : "opacity-0 transition duration-200"}`}
                    src={motion}
                    alt={`Image ${index + 1}`}
                    />
                ))}
                </figure>
                <div className="w-full flex justify-between p-2">
                    <button className="z-10" onClick={handlePrevClick}>Previo</button>
                    <button className="z-10">Ver</button>
                    <button className="z-10" onClick={handleNextClick}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
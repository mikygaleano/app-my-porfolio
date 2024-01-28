import { useState } from "react";

export const useLayer = (proyectos)=> {

    const [ currentImage, setCurrentImage ] = useState(0);

    

    const handlePrevClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
      };
    
      const handleNextClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
      };

    return {
        handleNextClick,
        handlePrevClick,
        currentImage
    };
}
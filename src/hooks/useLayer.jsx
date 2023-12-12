import { useState } from "react";

export const useLayer = (images)=> {

    const [ currentImage, setCurrentImage ] = useState(0);

    

    const handlePrevClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const handleNextClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };

    return {
        handleNextClick,
        handlePrevClick,
        currentImage
    };
}
import { useState, useEffect } from "react";

export const Presentation = ()=> {

    const text = ['frontend', 'backend', 'ingeniero'];
    const [ index, setIndex ] = useState(0);
    const [ currentText, setCurrentText ] = useState('');

    useEffect(()=> {
        const escribir = (prevText)=> text[index].slice(0, prevText.length +1);
        const borrar = (prev)=> prev.slice(0, (-1) % prev.length -1);
        const cambiarIndex = (prev)=> (prev + 1) % (text.length -1);
        const resetIndex = ()=> setIndex(0);
        const currentLength = text[index].length;


        const intervalId = setInterval(()=> {

            if (currentLength) {
                setCurrentText((prevText) => escribir(prevText));
            } 
            
            if (currentLength === currentText.length) {
                setTimeout(()=> {
                    setCurrentText((prev)=> borrar(prev));
                    setIndex((prev) => cambiarIndex(prev))
                }, 500);
            } else {
                setTimeout(() => {
                    resetIndex();
                  }, 500);    
            };
            
        }, 150);

        return () => clearInterval(intervalId);

    },[index, currentText])




    return (
        <div className="h-52 w-72 row-end-3 col-end-3 p-5 flex flex-row">
            <h3 className="text-black">Hola, soy <span className="text-black">{currentText}</span>|</h3>
        </div>
    )
}
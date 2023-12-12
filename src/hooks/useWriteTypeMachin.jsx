import { useState, useEffect } from "react";


export const useWriteTypeMachin =(text)=> {


    const [ currentText, setCurrentText ] = useState('');
    const [ index, setIndex ] = useState(0);

    // delay espera (ms) para resolver
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleTextAnimation = async () => {
        const txt = text[index];

        // escribir
        for (let i = 0; i <= txt.length; i++) {
        setCurrentText(txt.slice(0, i));
        await delay(150);
        }

        await delay(500); // Esperar antes de borrar

        // borrar
        for (let i = txt.length; i >= 0; i--) {
        setCurrentText(txt.slice(0, i));
        await delay(150);
        }

        await delay(500); // esperar antes de aumentar el index
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
  };

  useEffect(() => {
    handleTextAnimation();
  }, [index]);

  return {
    currentText
  };
}
import { cv, socialMedia, text } from "../constantes";
import { useWriteTypeMachin } from "../hooks/useWriteTypeMachin";
import { CardHome } from "./CardHome"
import { Presentation } from "./Presentation";
import { Proyect } from "./Proyec";


export const Home = ()=> {

    const { currentText } = useWriteTypeMachin(text);

    const handleDownload = () => {
        const downloadInstance = document.createElement('a');
        downloadInstance.href = cv;
        downloadInstance.target = '_blank';
    
        document.body.appendChild(downloadInstance);

        downloadInstance.click();
    
        document.body.removeChild(downloadInstance);
      };

    return (
        <section className="w-full min-h-screen flex flex-1 justify-center items-center gap-5 m-auto bg-black">
            <div className="mt-10 w-full m-auto p-10 h-fit max-sm:flex max-sm:flex-col grid grid-cols-2 grid-rows-2 justify-around gap-7">
                <CardHome 
                    handleDownload={handleDownload}
                    socialMedia={socialMedia}
                    currentText={currentText}
                    />
                <Presentation />
                <Proyect />
            </div>
        </section>
    )
}
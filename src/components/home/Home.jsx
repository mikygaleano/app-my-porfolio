import { cv, socialMedia, text } from "../../constantes";
import { useWriteTypeMachin } from "../../hooks/useWriteTypeMachin";
import { CardHome } from "./CardHome"
import { Presentation } from "./Presentation";
import { Astronauta } from "./Astronauta";


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
        <section className="min-w-full max-w-[1024] min-h-screen flex flex-1 justify-center items-end gap-5 m-auto bg-black">
            <div className="w-full h-full m-auto p-10 max-md:flex max-md:flex-col grid grid-flow-col gap-2 max-sm:gap-16 max-md:gap-28">
                <CardHome 
                    handleDownload={handleDownload}
                    socialMedia={socialMedia}
                    currentText={currentText}
                    />
                <Presentation />
                <Astronauta />
            </div>
        </section>
    )
}
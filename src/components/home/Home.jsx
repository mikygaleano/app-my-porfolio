import { cv, socialMedia, text } from "../../constantes";
import { useWriteTypeMachin } from "../../hooks/useWriteTypeMachin";
import { CardHome } from "./CardHome"

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
        <section className="min-w-full h-full max-md:max-h-fit flex flex-col items-center justify-center gap-5 m-auto" id="contacto">
            <div className="w-full h-full p-10 max-sm:p-2 flex flex-1 justify-center items-center gap-2 mt-12">
                <CardHome 
                    handleDownload={handleDownload}
                    socialMedia={socialMedia}
                    currentText={currentText}
                    />
            </div>
        </section>
    )
}
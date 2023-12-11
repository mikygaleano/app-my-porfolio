import { cv, socialMedia } from "../constantes";
import { CardHome } from "./CardHome"
import { Presentation } from "./Presentation";


export const Home = ()=> {

    const handleDownload = () => {
        const downloadInstance = document.createElement('a');
        downloadInstance.href = cv;
        downloadInstance.target = '_blank';
    
        document.body.appendChild(downloadInstance);

        downloadInstance.click();
    
        document.body.removeChild(downloadInstance);
      };

    return (
        <section className="w-full min-h-screen flex flex-1 justify-center bg-backgroundPrimary">
            <div className="mt-10 w-10/12 h-fit max-sm:flex max-sm:flex-col grid grid-cols-2 grid-rows-2 gap-5">
                <CardHome handleDownload={handleDownload} socialMedia={socialMedia}/>
                <Presentation />
            </div>
        </section>
    )
}
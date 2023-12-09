import { CardHome } from "./CardHome"


export const Home = ()=> {

    const handleDownload = () => {
        const downloadInstance = document.createElement('a');
        downloadInstance.href = './public/archivos/cv.pdf';
        downloadInstance.target = '_blank';
    
        document.body.appendChild(downloadInstance);

        downloadInstance.click();
    
        document.body.removeChild(downloadInstance);
      };

    return (
        <section>
            <CardHome handleDownload={handleDownload}/>
        </section>
    )
}
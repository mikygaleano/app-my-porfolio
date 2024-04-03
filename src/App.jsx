import { Proyectos } from "./components/Projectos/Proyectos";
import { Experiencia } from "./components/experiencia/Experiencia";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { SobreMi } from "./components/sobre-mi/SobreMi";
import { exper } from "./constantes";


export const App = () =>{

  return (
    <main className=" bg-yellow-100 min-w-full min-h-screen flex flex-col items-center gap-10 font-fontFamily">
     <Header/>
     <Home/>
     <Experiencia exper={exper}/>
     <Proyectos/>
     <SobreMi/>
     <Footer/>
    </main>
  )
};
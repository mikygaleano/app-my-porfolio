import { Proyectos } from "./components/Projectos/Proyectos";
import { Experiencia } from "./components/experiencia/Experiencia";
import { Home } from "./components/home/Home";
import { SobreMi } from "./components/sobre-mi/SobreMi";
import { exper } from "./constantes";


export const App = () =>{

  return (
    <main className="bg-slate-100 min-w-full min-h-screen flex flex-col gap-10 font-fontFamily">
     <Home/>
     <Experiencia exper={exper}/>
     <Proyectos/>
     <SobreMi/>
    </main>
  )
};
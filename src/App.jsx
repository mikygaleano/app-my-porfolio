import { Experiencia } from "./components/experiencia/Experiencia";
import { Home } from "./components/home/Home";
import { exper } from "./constantes";


export const App = () =>{

  return (
    <main className="bg-slate-100 min-w-full min-h-screen flex flex-col gap-10">
     <Home/>
     <Experiencia exper={exper}/>
    </main>
  )
};
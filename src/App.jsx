import { Home } from "./components/home/Home";
import {SobreMi} from "./components/sobre-mi/SobreMi";


export const App = () =>{

  return (
    <main className="bg-black min-h-screen">
     <Home/>
     <SobreMi/>
    </main>
  )
};
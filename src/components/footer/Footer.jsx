

export const Footer = ()=> {


    return (
        <footer className="w-full h-28 flex flex-row max-md:flex-col justify-between items-center p-2 bg-slate-300">
            <div className="m-auto">
                <span>© 2024 Michael Galeano N. (Maikidev)</span>
            </div>
            <div className="m-auto flex flex-row gap-5">
                <a href="#contacto">Contacto</a>
                <a href="#sobre-mi">Sobre mi</a>
            </div>
        </footer>
    )
}
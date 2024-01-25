import { Layer } from "./Layer"

export const Proyectos = ()=> {

    return (
        <section className="w-full min-h-full flex flex-col gap-3">
            <div className="w-10/12 h-fit self-center">
                <h3 className="font-semibold text-3xl">💻 Mis proyectos</h3>
            </div>
            <div className="w-full flex flex-col items-center">
                <Layer/>
            </div>
        </section>
    )
}
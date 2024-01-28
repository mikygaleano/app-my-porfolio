import { generarID } from "./hooks/useId";


export const socialMedia = [
    {
        name: 'linkedin',
        link: 'https://linkedin.com/in/michaelgaleano/',
        image: 'public/image/social/linkedin.png',
        id: generarID()
    },
    {
        name: 'github',
        link: 'https://github.com//mikygaleano/',
        image: 'public/image/social/github.png',
        id: generarID()
    },
    {
        name: 'mail',
        link: 'mailto:creatormikeonline@gmail.com',
        image: 'public/image/social/email.png',
        id: generarID()
    },
    {
        name: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=5401138985013',
        image: 'public/image/social/email.png',
        id: generarID()
    }
];

export const cv = './archivos/cv.pdf';

export const text = ['Developer','Frontend','Ing. informatico'];

export const proyectos = [
    {
        id: generarID(),
        image: 'public/image/proyects/mercado-libre.png',
        tecnologias: ['tailwind', 'react']
    },
    {
        id: generarID(),
        image: 'public/image/proyects/clima.png',
        tecnologias: ['css', 'javascript', 'api clima']
    },
    {
        id: generarID(),
        image: 'public/image/proyects/to-do-list.png',
        tecnologias: ['css', 'javascript']
    }
];

export const exper = [
    {
        id: generarID(),
        fecha: 'Actualmente',
        puesto: 'Full stack developer web',
        parrafo: ['Desarrollo aplicaciones web de manera frelance']
    },
    {
        id: generarID(),
        fecha: 'Marzo 2023',
        puesto: 'Frontend developer web',
        parrafo: ['Fui integrante, como desarrollador en un equipo de la startup identikit app.', 'Para desarrollar una web informativa para una aseguradora']
    }
];
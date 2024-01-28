import { generarID } from "./hooks/useId";


export const socialMedia = [
    {
        name: 'linkedin',
        link: 'https://linkedin.com/in/michaelgaleano/',
        image: 'image/linkedin.png',
        id: generarID()
    },
    {
        name: 'github',
        link: 'https://github.com//mikygaleano/',
        image: 'image/github.png',
        id: generarID()
    },
    {
        name: 'mail',
        link: 'mailto:creatormikeonline@gmail.com',
        image: 'image/email.png',
        id: generarID()
    },
    {
        name: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=5401138985013',
        image: 'image/email.png',
        id: generarID()
    }
];

export const cv = './archivos/cv.pdf';

export const text = ['Developer','Frontend','Ing. informatico'];

export const proyectos = [
    {
        id: generarID(),
        image: 'image/mercado-libre.png',
        tecnologias: ['tailwind', 'react'],
        url: 'https://mikygaleano.github.io/my-store',
        detail: ['Proyecto con fines didacticos.', 'Es un clon de mercado libre, es de codigo libre.'],
    },
    {
        id: generarID(),
        image: 'image/clima.png',
        tecnologias: ['css', 'javascript', 'api clima'],
        url: 'https://mikygaleano.github.io/react-app-clima',
        detail: ['App web meterologica.', 'Consume una api externa y trae la informacíon del clima.'],
    },
    {
        id: generarID(),
        image: 'image/to-do-list.png',
        tecnologias: ['css', 'javascript'],
        url: 'https://mikygaleano.github.io/to-do-list',
        detail: ['App web to do list.', 'Agregar lista nueva, marcar completas y borrar lista'],
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
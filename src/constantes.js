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
        image: 'image/whatsapp.png',
        id: generarID()
    }
];

export const cv = './archivos/cv.pdf';

export const text = ['Developer','Frontend','Ing. informatico'];

export const proyectos = [
    {
        id: generarID(),
        image: 'image/mercado-libre.png',
        tecnologias: ['tailwind css', 'react.js', 'react-router-dom', 'vite'],
        url: 'https://mikygaleano.github.io/my-store',
        detail: ['Este es un proyecto clon de MercadoLibre desarrollado con fines didacticos.', 'Es un clon de mercado libre, es de codigo libre. El objetivo principal es aprender y mejorar las habilidades en desarrollo web.', 'Este proyecto está disponible como código abierto para que cualquier persona interesada pueda revisar, clonar y contribuir para mejorar o personalizar según sus necesidades.'],
    },
    {
        id: generarID(),
        image: 'image/clima.png',
        tecnologias: ['module css', 'react.js', 'api tu tiempo'],
        url: 'https://mikygaleano.github.io/react-app-clima',
        detail: ['Es una aplicación web integral que proporciona información meteorológica precisa y detallada para usuarios de todo el mundo.', ' Diseñada con un enfoque en la usabilidad y la accesibilidad, esta aplicación ofrece una experiencia única para aquellos interesados en monitorear y comprender el clima en su región local y más allá.'],
    },
    {
        id: generarID(),
        image: 'image/to-do-list.png',
        tecnologias: ['tailwind css', 'react.js', 'vite'],
        url: 'https://mikygaleano.github.io/to-do-list',
        detail: ['es una aplicación web imprescindible para cualquier persona que busque mejorar su organización personal, gestionar proyectos de manera efectiva y aumentar su productividad en general.', ' Con su conjunto completo de características y su enfoque en la usabilidad, esta aplicación ofrece una solución integral para la gestión de tareas que se adapta a las necesidades de cualquier usuario.'],
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
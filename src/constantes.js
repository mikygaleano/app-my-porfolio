import { generarID } from "./hooks/useId";


export const socialMedia = [
    {
        name: 'linkedin',
        link: 'https://linkedin.com/in/michaelgaleano/',
        image: './image/linkedin.png',
        id: generarID()
    },
    {
        name: 'github',
        link: 'https://github.com//mikygaleano/',
        image: './image/github.png',
        id: generarID()
    },
    {
        name: 'mail',
        link: 'mailto:creatormikeonline@gmail.com',
        image: './image/email.png',
        id: generarID()
    },
    {
        name: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=5401138985013',
        image: './image/whatsapp.png',
        id: generarID()
    }
];

export const cv = './archivos/cv.pdf';

export const text = ['Developer','Frontend','Backend' ,'Ingeniero'];

export     const images = ['./image/Screenshot.png', './image/background.jpg'];

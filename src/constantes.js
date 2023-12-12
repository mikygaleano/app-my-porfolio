import { generarID } from "./hooks/useId";


export const socialMedia = [
    {
        name: 'linkedin',
        link: 'https://linkedin.com/in/michaelgaleano/',
        image: './public/image/linkedin.png',
        id: generarID()
    },
    {
        name: 'github',
        link: 'https://github.com//mikygaleano/',
        image: './public/image/github.png',
        id: generarID()
    },
    {
        name: 'mail',
        link: 'mailto:creatormikeonline@gmail.com',
        image: './public/image/email.png',
        id: generarID()
    },
    {
        name: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=5401138985013',
        image: './public/image/whatsapp.png',
        id: generarID()
    }
];

export const cv = './public/archivos/cv.pdf';

export const text = ['Developer','Frontend','Backend' ,'Ingeniero'];




export const CardHome = ({handleDownload})=> {

    return (
        <div className="flex flex-grow max-sm:flex-col items-center bg-slate-200 rounded-lg  h-52 container max-sm:justify-center m-auto shadow-xl">
            <figure className="w-24 h-24">
              <img className="relative -left-1/4 max-sm:-left-0 max-sm:top-3 w-28 h-20 max-sm:w-20 rounded-full bg-yellow-200 object-contain hover:scale-110" src="./public/image/perfil.png" alt="maikidev"/>
            </figure>
            <div className="w-full m-3 h-24 flex flex-col justify-end max-sm:ml-14">
              <span className="text-slate-500 text-lg max-sm:text-xs">Developer</span>
              <h1 className="text-xl font-bold max-sm:text-xs">Galeano Michael N.</h1>
              <div className="flex my-2 gap-2">
                <a  href="https://linkedin.com/in/michaelgaleano/" target="_blank"><img className="w-5 p-1 bg-white rounded hover:bg-slate-100" src="./public/image/linkedin.png" alt="linkedin"/></a>
                <a  href="https://github.com//mikygaleano/" target="_blank"><img className="w-5 p-1 bg-white rounded hover:bg-slate-100" src="./public/image/github.png" alt="github"/></a>
                <a  href="mailto:creatormikeonline@gmail.com" target="_blank"><img className="w-5 p-1 bg-white rounded hover:bg-slate-100" src="./public/image/email.png" alt="email"/></a>
                <a  href="https://api.whatsapp.com/send?phone=5401138985013" target="_blank"><img className="w-5 p-1 bg-white rounded hover:bg-slate-100" src="./public/image/whatsapp.png" alt="whatsapp"/></a>
                <button 
                    onClick={handleDownload}
                    id="dowload" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-2 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>cv</span>
                </button>
              </div>
            </div>
          </div>
    )
};
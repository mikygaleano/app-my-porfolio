

export const CardHome = ({handleDownload, socialMedia, currentText})=> {

    return (
        <div className="h-52 row-end-1 col-span-3 max-md:col-span-3 container flex flex-grow max-sm:flex-col items-center bg-primaryLigth rounded-lg max-sm:justify-center m-auto shadow-xl">
            <figure className="w-28 h-28">
              <img className="relative -left-1/4 max-sm:-left-0 max-sm:top-3 w-20 h-20 rounded-full bg-secondLigth object-contain hover:scale-110" src="./image/perfil.png" alt="foto avatare"/>
            </figure>
            <div className="w-full m-3 h-24 flex flex-col justify-end max-sm:ml-14">
              <span className="text-slate-500 text-lg max-sm:text-xs">{currentText}<strong className="animate-pulse">|</strong></span>
              <h1 className="text-xl font-bold max-sm:text-xs">Galeano Michael N.</h1>
              <div className="flex my-2 gap-2">
                {
                  socialMedia.map(social => (
                    <a key={social.id} href={social.link} target="_blank"><img className="w-5 p-1 bg-white rounded hover:bg-slate-100" src={social.image} alt={social.name}/></a>
                  ))
                }
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
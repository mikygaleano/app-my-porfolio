

export const CardHome = ({handleDownload, socialMedia, currentText})=> {


    return (
        <div
          className='h-52 w-10/12 max-md:w-11/12 max-md:h-80 row-end-1 col-end-2 flex flex-1 flex-grow max-sm:flex-col items-center bg-primaryLigth rounded-lg max-sm:justify-center m-auto shadow-xl'   
          >
            <figure className="w-52 h-52">
              <img className="relative -left-10 top-12  max-sm:top-3 max-sm:left-1/4 w-24 h-24 rounded-full bg-secondLigth object-center hover:scale-110" src="./image/perfil.png" alt="foto avatare"/>
            </figure>
            <div className="max-md:w-full w-1/2 m-3 h-24 flex flex-col justify-end max-sm:ml-14">
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
            <div className="w-fit h-5/6 max-sm:w-10/12 max-sm:h-fit m-auto border border-gray-500"></div>
            <div className="w-full h-full flex flex-row items-center justify-center m-auto max-sm:mt-10">
                <div className="w-11/12 max-sm:h-full max-2xl:h-3/5 max-md:ml-auto max-md:mr-auto max-md:mt-auto flex flex-col">
                    <div className="w-full flex flex-col gap-2 font-[open-display]">
                        <p className=" text-slate-500 font-bold text-sm">+2 años de experiencia. Soy un profesional en constante aprendizaje y evolución.</p>
                        <p className=" text-slate-500 font-bold text-sm">De <span className="text-red-500">Buenos Aíres, </span><span className=" text-cyan-500">Argentina</span></p>
                    </div>
                </div>
            </div>
          </div>
    )
};
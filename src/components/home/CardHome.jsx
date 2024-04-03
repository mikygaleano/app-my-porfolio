

export const CardHome = ({handleDownload, socialMedia, currentText})=> {


    return (
        <div
          className='h-52 w-10/12 border rounded-md max-md:w-11/12 max-md:h-80 max-[281px]:w-60 max-[281px]h-80 flex flex-1 flex-grow max-sm:flex-col items-center bg-transparent max-sm:justify-center'   
          >
            <figure className="w-52 h-52">
              <img className="relative -left-10 top-12  max-sm:top-3 max-sm:left-1/4 max-md:m-2 w-24 h-24 max-[281px]:w-14 max-[281px]:h-14 max-[281px]:-top-5 max-[281px]:ml-5 rounded-full bg-secondLigth object-center" src="./image/perfil.png" alt="foto avatare"/>
            </figure>
            <div className="max-md:w-full w-1/2 m-3 mt-20 max-sm:mt-auto h-24 flex flex-col justify-end max-sm:ml-14">
              <h2 className="text-slate-500 text-lg max-sm:text-xs">{currentText}<strong className="animate-pulse">|</strong></h2>
              <h1 className="text-xl font-bold max-md:text-xs">Galeano Michael N.</h1>
              <div className="flex flex-col my-2 gap-2">
                <div className="flex flex-row gap-2">
                  {
                    socialMedia.map(social => (
                      <a key={social.id} href={social.link} target="_blank"><img className="w-5 max-sm:w-7 p-1 bg-white rounded hover:bg-slate-100" src={social.image} alt={social.name}/></a>
                    ))
                  }
                </div>
                <button 
                    onClick={handleDownload}
                    id="dowload" className="w-10 h-fit bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-2 rounded shadow-lg flex-col justify-center items-center">
                  <span>cv</span>
                  <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </button>
              </div>
            </div>
            <div className="w-fit h-5/6 max-sm:w-10/12 max-sm:h-fit m-auto border border-gray-500"></div>
            <div className="w-full h-full flex flex-row max-[619px]:ml-2 items-center justify-center max-sm:mt-10">
                <div className="w-11/12 max-sm:h-full max-2xl:h-3/5 max-md:ml-auto max-md:mr-auto max-md:mt-auto max-sm:mb-2.5 flex flex-col">
                    <div className="w-full flex flex-col gap-0 font-[open-display]">
                        <p className=" text-slate-500 font-black">3 años de experiencia. <span className="text-orange-600">Soy un profesional en constante aprendizaje y evolución.</span> </p>
                        <p className=" text-slate-500 font-black">De <span className="text-red-500">Buenos Aíres, </span><span className=" text-cyan-500">Argentina</span></p>
                    </div>
                </div>
            </div>
          </div>
    )
};
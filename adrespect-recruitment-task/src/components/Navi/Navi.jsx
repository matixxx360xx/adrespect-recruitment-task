import { useState } from 'react';

function Navi() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);




  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 mx-auto w-full max-w-[1262px] min-h-[72px] bg-white gap-4 sm:gap-0 relative z-50">

      <h2 className="text-xl">
        <span className="text-black font-black">giard</span>design
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-[30px] lg:gap-[48px] text-xs sm:text-sm md:text-base font-['Inter'] text-[#111111]">

        <div className="relative">
          <span
            className="inline-flex items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity py-2 select-none"
            onClick={() => setIsOfferOpen(prev => !prev)}
          >
            Oferta
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${isOfferOpen ? 'rotate-180' : ''}`}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M0.130175 0.758606C-0.0433916 0.585039 -0.0433916 0.303633 0.130175 0.130066C0.287962 -0.0277214 0.534874 -0.0420656 0.708866 0.0870333L0.758714 0.130066L4 3.37115L7.24129 0.130066C7.39907 -0.0277214 7.64599 -0.0420656 7.81998 0.0870333L7.86983 0.130066C8.02761 0.287854 8.04196 0.534766 7.91286 0.708758L7.86983 0.758606L4.31427 4.31416C4.15648 4.47195 3.90957 4.48629 3.73558 4.35719L3.68573 4.31416L0.130175 0.758606Z" fill="#111111" />
            </svg>
          </span>

          <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 transition-all duration-300 origin-top z-50 ${isOfferOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
            }`}>
            <a href="#projekty" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Projekty ogrodów</a>
            <a href="#realizacje" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Realizacje</a>
            <a href="#konsultacje" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Konsultacje</a>
          </div>
        </div>

        <span className="cursor-pointer hover:opacity-75 transition-opacity">O firmie</span>
        <span className="cursor-pointer hover:opacity-75 transition-opacity">Realizacje</span>
        <span className="cursor-pointer hover:opacity-75 transition-opacity">Kontakt</span>

        <div className="relative flex items-center">
          <span
            className="absolute right-2.5 z-10 flex cursor-pointer hover:opacity-75 transition-opacity shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          >
            <svg width="20" height="20" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 2.25C5.71979 2.25 2.25 5.71979 2.25 10C2.25 14.2802 5.71979 17.75 10 17.75C11.87 17.75 13.5853 17.0877 14.9242 15.9848L20.4697 21.5303L20.5538 21.6029C20.8474 21.8208 21.2641 21.7966 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L15.9848 14.9242C17.0877 13.5853 17.75 11.87 17.75 10C17.75 5.71979 14.2802 2.25 10 2.25ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75Z" fill="#111111" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Wyszukaj coś..."
            className={`bg-transparent outline-none text-xs sm:text-sm text-[#111111] placeholder:text-gray-400 transition-all duration-300 border border-solid border-black rounded-full pl-3 pr-8 py-1 ${isOpen ? 'opacity-100 w-36 sm:w-48' : 'opacity-0 pointer-events-none w-0 border-none'
              }`}
          />
        </div>

      </div>

    </nav>
  );
}

export default Navi;
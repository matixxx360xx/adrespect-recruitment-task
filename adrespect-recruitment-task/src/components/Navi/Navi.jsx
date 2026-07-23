import { useState } from 'react';

function Navi() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 mx-auto w-full max-w-[1262px] min-h-[72px] bg-white gap-4 sm:gap-0 relative">
        
        <h2 className="text-xl">
          <span className="text-black font-black">giard</span>design
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-[30px] lg:gap-[48px] text-xs sm:text-sm md:text-base font-['Inter'] text-[#111111]">
          
          <div className="relative">
            <span 
              className="inline-flex items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity py-2"
              onClick={() => setIsOfferOpen(prev => !prev)}
            >
              Oferta
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${isOfferOpen ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M0.130175 0.758606C-0.0433916 0.585039 -0.0433916 0.303633 0.130175 0.130066C0.287962 -0.0277214 0.534874 -0.0420656 0.708866 0.0870333L0.758714 0.130066L4 3.37115L7.24129 0.130066C7.39907 -0.0277214 7.64599 -0.0420656 7.81998 0.0870333L7.86983 0.130066C8.02761 0.287854 8.04196 0.534766 7.91286 0.708758L7.86983 0.758606L4.31427 4.31416C4.15648 4.47195 3.90957 4.48629 3.73558 4.35719L3.68573 4.31416L0.130175 0.758606Z" fill="#111111" />
              </svg>
            </span>

            <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 transition-all duration-300 origin-top z-50 ${
              isOfferOpen ? 'opacity-150 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
            }`}>
              <a href="#projekty" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Projekty ogrodów</a>
              <a href="#realizacje" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Realizacje</a>
              <a href="#konsultacje" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Konsultacje</a>
            </div>
          </div>

          <span className="cursor-pointer hover:opacity-75 transition-opacity">O firmie</span>
          <span className="cursor-pointer hover:opacity-75 transition-opacity">Realizacje</span>
          <span className="cursor-pointer hover:opacity-75 transition-opacity">Kontakt</span>

        </div>
      </nav>
    </>
  );
}

export default Navi;
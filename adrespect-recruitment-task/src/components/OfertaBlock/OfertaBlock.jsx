function Oferta() {
  return (
    <section className="flex flex-col items-center py-16 md:py-[120px] px-4 sm:px-8 gap-12 md:gap-[96px] w-full bg-[#F5F0EC] mx-auto">
      <div className="flex flex-col items-start gap-4 max-w-[1040px] w-full">
        <p className="font-['Inter'] font-normal text-[12px] md:text-[16px] leading-[150%] tracking-[-0.01em] text-[#1B5B31]">
          Oferta
        </p>

        <div className="flex flex-col items-start gap-[24px] md:gap-[36px] max-w-[709px] w-full">
          <h2 className="w-full font-['Montserrat'] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.03em] text-[#111111]">
            Działamy kompleksowo
          </h2>
          <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[150%] text-[#111111]">
            Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
          </p>
        </div>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[32px] lg:gap-[64px] w-full max-w-[1440px] px-0 md:px-[40px] lg:px-[88px]">

        <a href="#projekty" className="flex flex-col justify-between items-start p-6 sm:p-[40px] gap-8 w-full bg-white rounded-[28px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="flex flex-col items-start gap-8 w-full">
            <img src="src/assets/pencil.png" alt="Projekty" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />

            <div className="flex flex-col gap-3 w-full">
              <h3 className="font-['Montserrat'] font-medium text-[24px] md:text-[28px] leading-[115%] tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-[#1B5B31]">
                Projekty
              </h3>
              <p className="font-['Inter'] font-normal text-[14px] leading-[150%] tracking-[-0.01em] text-[#111111]">
                Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.
              </p>
            </div>
          </div>
          <span className="box-border flex flex-row items-center justify-start pb-1 gap-[10px] w-[171px] h-[28px] border-b border-[#1B5B31] text-[#1B5B31]">
            Dowiedz się więcej
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#1B5B31" />
            </svg>
          </span>
        </a>

        <a href="#wizualizacje" className="flex flex-col justify-between items-start p-6 sm:p-[40px] gap-8 w-full bg-white rounded-[28px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="flex flex-col items-start gap-8 w-full">
            <img src="src/assets/eye.png" alt="Wizualizacje" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />

            <div className="flex flex-col gap-3 w-full">
              <h3 className="font-['Montserrat'] font-medium text-[24px] md:text-[28px] leading-[115%] tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-[#1B5B31]">
                Wizualizacje
              </h3>
              <p className="font-['Inter'] font-normal text-[14px] leading-[150%] tracking-[-0.01em] text-[#111111]">
                Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.
              </p>
            </div>
          </div>
          <span className="box-border flex flex-row items-center justify-start pb-1 gap-[10px] w-[171px] h-[28px] border-b border-[#1B5B31] text-[#1B5B31]">
            Dowiedz się więcej
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#1B5B31" />
            </svg>
          </span>
        </a>

        <a href="#realizacje" className="flex flex-col justify-between items-start p-6 sm:p-[40px] gap-8 w-full bg-white rounded-[28px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="flex flex-col items-start gap-8 w-full">
            <img src="src/assets/stars.png" alt="Realizacje" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />

            <div className="flex flex-col gap-3 w-full">
              <h3 className="font-['Montserrat'] font-medium text-[24px] md:text-[28px] leading-[115%] tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-[#1B5B31]">
                Realizacje
              </h3>
              <p className="font-['Inter'] font-normal text-[14px] leading-[150%] tracking-[-0.01em] text-[#111111]">
                Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.
              </p>
            </div>
          </div>
          <span className="box-border flex flex-row items-center justify-start pb-1 gap-[10px] w-[200px] h-[28px] border-b border-[#1B5B31] text-[#1B5B31]">
            Zobacz nasze realizacje
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#1B5B31" />
            </svg>
          </span>
        </a>

      </article>
    </section>
  );
}

export default Oferta;
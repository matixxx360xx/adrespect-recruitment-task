import { useState } from 'react';

const slides = [
  {
    title: "Nowoczesna aranżacja Twojego ogrodu",
    description: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
    image: "src/assets/photo-1514621166532-aa7eb1a3a2f4.png"
  },
  {
    title: "Zielona przestrzeń dopasowana do Ciebie",
    description: "Tworzymy unikalne projekty ogrodów, które łączą w sobie funkcjonalność, elegancję oraz harmonię z otaczającą przyrodą.",
    image: "src/assets/photo-1514621166532-aa7eb1a3a2f4.png"
  },
  {
    title: "Profesjonalizm i pasja w każdym detalu",
    description: "Od koncepcji po wykonanie – dbamy o każdy etap realizacji, aby Twój ogród zachwycał przez cały rok.",
    image: "src/assets/photo-1514621166532-aa7eb1a3a2f4.png"
  }
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const currentSlide = slides[currentIndex];

  return (
    <>
      <section className="w-full bg-[#DCC1AB] overflow-hidden">
        <div className="w-full md:max-h-[737px] grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="flex justify-center md:justify-end items-center px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-0 w-full">
            <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-[72px] w-full max-w-[599px]">

              <div className={`flex flex-col items-start p-0 gap-[24px] md:gap-[44px] w-full max-w-[599px] transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <h1 className="w-full font-['Montserrat'] font-medium text-[36px] md:text-[60px] leading-[1.2] md:leading-[70px] text-[#111111]">
                  {currentSlide.title}
                </h1>

                <p className="w-full md:max-w-[489.01px] font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[150%] text-[#111111]">
                  {currentSlide.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-start p-0 gap-[16px] sm:gap-[36px] w-full sm:max-w-[493px]">
                <button className="flex flex-row items-center justify-center pt-[12px] px-[24px] pb-[14px] gap-[10px] w-full sm:w-[208px] h-[50px] bg-[#1B5B31] rounded-[200px] text-white hover:bg-[#154726] transition-colors cursor-pointer text-[14px] sm:text-[16px]">
                  Skontaktuj się
                </button>

                <button className="box-border flex flex-row items-center justify-center pt-[12px] px-[22px] pb-[14px] gap-[8px] w-full sm:w-[249px] h-[50px] border border-[#1B5B31] text-[#1B5B31] rounded-[200px] hover:bg-[#1B5B31]/10 transition-colors cursor-pointer text-[14px] sm:text-[16px]">
                  Zobacz realizacje{" "}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M16 7.99529L15.1043 7.09959L8.63642 13.5769L8.63642 1.02988e-07L7.36358 8.78099e-08L7.36358 13.5675L0.895699 7.09959L9.54553e-08 7.99529L8.00471 16L16 7.99529Z" fill="#1B5B31" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          <div className="w-full h-[350px] sm:h-[500px] md:h-full md:min-h-[737px] overflow-hidden relative">
            <img src={currentSlide.image} 
            className={`w-full h-[755px] object-cover -scale-x-100 transition-all duration-700 transform ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`} alt="Hero Slide" />

            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
            
            <div className="absolute bottom-0 right-0 z-10 flex flex-row items-center justify-center px-6 sm:px-[32px] py-4 sm:py-[24px] gap-6 sm:gap-[32px] w-auto sm:w-[192px] h-auto sm:h-[96px] bg-[#F5F0EC]">
              <button onClick={prevSlide} className="p-1 hover:opacity-60 transition-opacity cursor-pointer text-[#111111] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button onClick={nextSlide} className="p-1 hover:opacity-60 transition-opacity cursor-pointer text-[#111111] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
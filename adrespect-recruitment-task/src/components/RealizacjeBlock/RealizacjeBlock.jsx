import React, { useEffect, useState, useRef } from 'react';
import Macy from 'macy';

const imagesList = [
  "src/assets/Photo (1).png",
  "src/assets/Photo (2).png",
  "src/assets/Photo (3).png",
  "src/assets/Photo (4).png",
  "src/assets/Photo (5).png",
  "src/assets/Photo (6).png",
  "src/assets/Photo (7).png",
  "src/assets/Photo (8).png",
  "src/assets/Photo (9).png",
  "src/assets/Photo (1).png",
  "src/assets/Photo (2).png",
  "src/assets/Photo (3).png"
];

function Realizacje() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const macyInstanceRef = useRef(null);

  useEffect(() => {
    const masonry = Macy({
      container: '#macy-container',
      trueOrder: true,
      margin: 24,
      columns: 3,
      breakAt: {
        768: 2,
        640: 1
      }
    });

    macyInstanceRef.current = masonry;

    masonry.runOnImageLoad(() => {
      masonry.recalculate(true);
    }, true);

    return () => {
      if (masonry) {
        masonry.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (macyInstanceRef.current) {
      setTimeout(() => {
        macyInstanceRef.current.recalculate(true);
      }, 100);
    }
  }, [isExpanded]);

  const heights = [
    "h-[450px]", "h-[320px]", "h-[320px]", 
    "h-[550px]", "h-[400px]", "h-[450px]", 
    "h-[450px]", "h-[670px]", "h-[670px]",
    "h-[500px]", "h-[380px]", "h-[420px]"
  ];

  const maxVisibleIndex = isExpanded ? imagesList.length - 1 : 8;

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex(prev => (prev === maxVisibleIndex ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex(prev => (prev === 0 ? maxVisibleIndex : prev - 1));
  };

  return (
    <section className="relative flex flex-col items-start pt-[60px] md:pt-[120px] pr-0 pl-0 gap-[48px] md:gap-[96px] bg-[#DCC1AB] overflow-hidden">

      <div className="flex flex-col items-start px-6 md:pl-[160px] gap-[16px] self-stretch z-10">
        <p className="font-['Inter'] font-normal text-[12px] md:text-[16px] leading-[150%] text-[#1B5B31] tracking-[-0.01em]">
          Realizacje
        </p>
        <h1 className="max-w-[339px] font-['Montserrat'] font-medium text-[36px] md:text-[48px] leading-[115%] text-[#111111]">
          Nasze projekty
        </h1>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[160px] relative z-10">

        <div id="macy-container" className="w-full">
          {imagesList.map((src, index) => {
            if (index >= 9 && !isExpanded) return null;

            return (
              <div 
                key={index} 
                className={`overflow-hidden rounded-lg ${heights[index]} cursor-pointer ${index >= 9 ? 'animate-fadeIn' : ''}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={src} 
                  alt={`Realizacja ${index + 1}`} 
                  className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105" 
                />
              </div>
            );
          })}
        </div>

        <div className={`absolute w-full md:w-[1440px] h-[1000px] left-0 bottom-[0] bg-gradient-to-t from-[#DCC1AB] via-[#DCC1AB]/80 to-[rgba(214,183,158,0)] pointer-events-none z-20 transition-all duration-700 ${isExpanded ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`} />

        <div className="flex justify-center w-full relative z-30 my-8">
          <button 
            onClick={() => setIsExpanded(prev => !prev)}
            className="box-border flex flex-row items-center justify-center pt-[12px] px-[22px] pb-[14px] gap-[8px] min-w-[123px] h-[50px] border border-[#111111] rounded-[200px] text-[#111111] font-medium cursor-pointer hover:bg-[#111111] hover:text-[#F5F0EC] transition-all duration-300 shadow-md"
          >
            {isExpanded ? 'Zwiń' : 'Rozwiń'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <path d="M16 7.99529L15.1043 7.09959L8.63642 13.5769L8.63642 1.02988e-07L7.36358 8.78099e-08L7.36358 13.5675L0.895699 7.09959L9.54553e-08 7.99529L8.00471 16L16 7.99529Z" fill="currentColor" />
            </svg>
          </button>
        </div>

      </div>

      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setActiveImageIndex(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >

            <button 
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-2 right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
            >
              ✕
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
            >
              ❮
            </button>
            <div className="overflow-hidden rounded-xl bg-white p-2 shadow-2xl max-h-[85vh]">
              <img 
                src={imagesList[activeImageIndex]} 
                alt="Powiększona realizacja" 
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg" 
              />
            </div>
            <button 
              onClick={nextImage}
              className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
            >
              ❯
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Realizacje;
function Instagram() {
  return (
    <section className="flex flex-col justify-center items-center py-[60px] md:py-[120px] px-6 md:px-[110px] w-full bg-[#F5F0EC] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between py-[60px] md:py-[120px] px-6 md:px-[110px] gap-8 md:gap-[64px] w-full max-w-[1440px] bg-[#1B5B31]">
        
        <h2 className="w-full md:w-[599px] font-['Montserrat'] font-normal text-[32px] md:text-[40px] leading-[120%] tracking-[-2px] text-[#F5F0EC]">
          Zostańmy w kontakcie! Znajdziesz nas na <span className="font-[500]">Instagramie</span>.
        </h2>

        <div className="flex flex-col items-start gap-[24px] w-full md:w-[157px]">
          <p className="w-full font-['Inter'] font-normal text-[16px] leading-[150%] tracking-[-0.01em] text-[#F5F0EC]">
            Śledź nasze najnowsze realizacje!
          </p>
          <button className="flex flex-row items-center justify-center py-[10px] px-[24px] pb-[12px] gap-[10px] w-[124px] h-[46px] bg-[#F5F0EC] hover:bg-[#e4ded8] active:bg-[#e4ded8] transition-colors rounded-[200px] cursor-pointer">
            <span className="font-['Inter'] font-normal text-[16px] leading-[150%] text-center text-[#1B5B31]">
              Instagram
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Instagram;
function OFirmie() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center p-0 gap-[170px] w-full md:min-h-[720px] bg-[#1B5B31] mx-auto overflow-hidden">
        <div className="w-full md:w-1/2 h-[350px] sm:h-[500px] md:h-[720px] flex-none order-0">
          <img src="/hause.png" className="w-full h-full object-cover -scale-x-100" />
        </div>

        <div className="flex flex-col items-start pl-6 pr-6 md:pl-0 md:pr-[96px] py-12 md:py-0 gap-[40px] md:w-1/2 max-w-[596px] flex-none order-1">

          <div className="flex flex-col items-start p-0 gap-[16px] max-w-[500px] self-stretch ">
            <p className="font-normal font-[Inter] text-[12px] md:text-[16px] leading-[150%] tracking-[-0.01em] text-[#F5F0EC]">
              O firmie
            </p>

            <h2 className=" font-small font-[Montserrat] text-[32px] sm:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.03em] text-[#F5F0EC] self-stretch">
              Tworzymy z pasją
            </h2>
          </div>

          <p className="font-normal font-[Inter] text-[16px] leading-[150%] tracking-[-0.01em] text-[#F5F0EC] self-stretch">
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
          </p>
          <button className="box-border flex flex-row items-center gap-[8px] max-w-[194px] max-h-[50px] border border-[#F5F0EC] rounded-[200px] pt-[12px] px-[22px] pb-[14px]"><span className="max-w-[126px] max-h-[24px] font-['Inter'] font-normal text-center text-[16px] leading-[150%] text-[#F5F0EC]">Poznaj nas bliżej</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#F5F0EC" />
          </svg>
          </button>
        </div>
      </section>
    </>
  );
}


export default OFirmie;
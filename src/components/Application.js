function Application() {
  return (
    <section>
      <div className="px-[15px] mx-0 sm:mx-[9.6px] pb-[132px] pt-[129px] md:pt-[229px] md:pb-[232px] flex flex-col items-center">
        <h2 className="text-center sm:text-start text-[24px] sm:text-[34px] md:text-[40px] text-[#fff] font-bold leading-normal tracking-[1.6px] uppercase">ЗАЦІКАВИВ КУРС?</h2>
        <div className="my-[28px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
        <div className="max-w-[385px] text-center text-[#C1C1C1] text-base font-normal">
          Залишай заявку та наш менеджер зв’яжеться з тобою найближчим часом
        </div>
        <div className="mt-[72px] w-full">
          <form action="">
            <div className="flex flex-col items-center xl:flex-row xl:justify-around flex-wrap gap-4 xl:gap-0">
              <input
                type="text"
                placeholder="Ім'я"
                className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
              />
            </div>
            <button className="block mt-[50px] mx-auto px-[39px] py-[21px] bg-[#EB601D] rounded-xl text-base text-[#fff] font-medium leading-normal uppercase">
              залишити заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Application;

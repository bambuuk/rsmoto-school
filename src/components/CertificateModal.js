import { MdClose } from "react-icons/md";

function CertificateModal({ isModalOpen, handleCloseModal }) {
  return (
    <>
      <div
        className={
          isModalOpen
            ? "fixed w-full h-full top-0 left-0 z-20 opacity-40 bg-black transition-all"
            : ""
        }
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          isModalOpen
            ? "fixed z-30 opacity-100 visible top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] h-auto mx-20px pt-[85px] pb-[94px] bg-[#2C2C2C] transition-all ease-in-out"
            : "fixed z-30 opacity-0 invisible scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] h-auto mx-20px pt-[85px] pb-[94px] bg-[#2C2C2C] transition-all ease-in-out"
        }
      >
        <div className="w-full relative">
          <div
            onClick={handleCloseModal}
            className="absolute transition-colors top-[-65px] right-[20px] cursor-pointer active:scale-90"
          >
            <MdClose
              size={40}
              className="hover:text-white text-[#EB601D] transition-colors"
            />
          </div>
          <h2 className="text-center text-[24px] sm:text-[34px] md:text-[40px] text-[#fff] font-bold leading-normal tracking-[1.6px] uppercase">
            МАЄШ СЕРТИФІКАТ?
          </h2>
          <div className="my-[28px] w-[80px] h-[4px] mx-auto rounded-sm bg-[#EB601D]"></div>
          <div className="mt-[98px] w-full">
            <form action="">
              <div className="flex flex-col items-center xl:flex-row xl:justify-around flex-wrap gap-4 xl:gap-0">
                <input
                  type="text"
                  placeholder="Ім'я"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors ease-in-out pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
              </div>
              <button className="block mt-[50px] mx-auto px-[39px] py-[21px] bg-[#EB601D] rounded-xl text-base text-[#fff] font-medium leading-normal uppercase">
                залишити заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateModal;

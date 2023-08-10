import { useState } from "react";
import { MdClose } from "react-icons/md";

function ModalWindow({ isModalOpen, handleCloseModal, modalText }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted === false) {
      setIsSubmitted(true);

      setTimeout(() => {
        handleCloseModal();
      }, 3000);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3500);
    }
  };

  return (
    <>
      <div
        className={
          (isModalOpen && !isSubmitted)
            ? "fixed w-full h-full top-0 left-0 z-20 opacity-40 bg-black"
            : ""
        }
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          isModalOpen
            ? "fixed z-30 opacity-100 visible top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] 2xl:w-[95%] h-[90%] xl:h-[auto] mx-20px pt-[50px] 2xl:pt-[85px] pb-[50px] 2xl:pb-[94px] bg-[#2C2C2C] transition-all ease-in-out border-2 border-solid border-gray-200"
            : "fixed z-30 opacity-0 invisible scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] h-auto mx-20px pt-[85px] pb-[94px] bg-[#2C2C2C] transition-all ease-in-out"
        }
      >
        <div
          className={isSubmitted ? "opacity-0 invisible transition-all ease-out" : "w-full relative transition-all ease-in"}
        >
          <div
            onClick={handleCloseModal}
            className="absolute transition-colors top-[-60px] sm:top-[-40px] 2xl:top-[-65px] right-[10px] lg:right-[20px] cursor-pointer active:scale-90"
          >
            <MdClose
              size={30}
              className="hover:text-white text-[#EB601D] transition-colors"
            />
          </div>
          <h2 className="mt-[20px] sm:mt-0 text-center text-base sm:text-[34px] md:text-[40px] text-[#fff] font-bold leading-normal tracking-[1.6px] uppercase">
            {modalText}
          </h2>
          <div className="my-[20px] sm:my-[28px] w-[80px] h-[4px] mx-auto rounded-sm bg-[#EB601D]"></div>
          <div className="mt-0 xl:mt-[98px] w-full">
            <form action="" onSubmit={onSubmit}>
              <div className="flex flex-col items-center xl:flex-row xl:justify-around flex-wrap gap-4 xl:gap-0">
                <input
                  required
                  type="text"
                  placeholder="Ім'я"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors ease-in-out pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
                <input
                  required
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  placeholder="Телефон"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
                />
              </div>
              <button
                className="block mt-[50px] mx-auto px-[39px] py-[21px] bg-[#EB601D] rounded-xl text-base text-[#fff] font-medium leading-normal uppercase"
              >
                залишити заявку
              </button>
            </form>
          </div>
        </div>
        <div
          className={!isSubmitted ? "opacity-0 invisible w-full absolute top-[50%] translate-y-[-50%] left-0 flex justify-center items-center flex-col transition-all ease-out" : "w-full absolute top-[50%] translate-y-[-50%] left-0 flex justify-center items-center flex-col transition-all ease-in visible opacity-100"}
        >
          <div className="text-4xl text-white text-center font-bold">Дякуємо!</div>
          <div className="text-xl text-white text-center mt-6">Заявка успішно відправлена!</div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;

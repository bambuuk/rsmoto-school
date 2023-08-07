import { useState, useEffect } from "react";

import CertificateModal from "./CertificateModal";
import bike from "../asserts/first-bike-2.png";

function Promo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scroll, setScroll] = useState('0px');

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  const handleOpenModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(true);
    
    document.body.classList.add('no-scroll');
    document.body.style.marginRight = `${scroll}px`;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    
    document.body.classList.remove('no-scroll');
    document.body.style.marginRight = '0px';
  };

  useEffect(() => {
    setScroll(calcScroll());
  }, []);

  return (
    <section onClick={handleCloseModal} className="relative px-[15px] mx-0 sm:mx-[9.6px] pt-[40px] sm:pt-[78px] mb-[72px] transition-all">
      <div className="absolute top-[-78px] left-[50%] translate-x-[-50%] hidden lg:block lg:text-[150px] xl:text-[180px] 2xl:text-[210px] font-bold leading-normal tracking-[-16.8px] uppercase opacity-[0.07999999821186066] bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent  ">
        Мотошкола
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#fff] text-[20px] sm:text-[45px] md:text-[56px] lg:text-[70px] font-extrabold tracking-[2.8px] uppercase leading-normal">
          ПЕРША ПРЕМІАЛЬНА
        </h2>
        <div className="text-base sm:text-[40px] text-[#fff] font-medium tracking-[1.6px] uppercase leading-normal">
          МОТОШКОЛА УКРАЇНИ
        </div>
        <p className="max-w-[416px] mt-[22px] text-[#C1C1C1] text-sm sm:text-base font-normal text-center ">
          Ексклюзивна колаборація від легендарних Harley Davidson та мотошколи
          RSMOTO.{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-[24.67px] pt-[30px]">
          <button className="px-[39px] py-[21px] rounded-xl bg-[#EB601D] text-sm sm:text-base font-medium uppercase leading-normal">
            залишити заявку
          </button>
          <button onClick={handleOpenModal} className="px-[39px] py-[21px] bg-black bg-opacity-50 border border-solid border-[#fff] rounded-xl text-[#fff] text-sm sm:text-base font-medium uppercase leading-normal">
            У мене є сертифікат
          </button>
        </div>
      </div>
      <div className='flex relative w-full z-[-1] lg:translate-y-[-10%] mt-5 lg:mt-0 after:content-[""] after:absolute after:w-full after:h-[40%] after:bg-gradient-moto after:bottom-[0] after:left-0'>
        <img className="w-full h-full object-cover" src={bike} alt="bike" />
      </div>
      <CertificateModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen} />
    </section>
  );
}

export default Promo;

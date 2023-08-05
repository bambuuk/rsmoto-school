import gift from "../asserts/gift.png";

function Gifts() {
  return (
    <section className="bg-[#2C2C2C]">
      <div className="px-[15px] mx-0 sm:mx-[9.6px]  flex flex-col pt-[110px] lg:mt-0 lg:flex-row justify-center items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="max-w-[370px] text-white text-[31px] lg:text-[31px] xl:text-[40px] font-bold leading-normal tracking-[1.6px] uppercase text-center lg:text-left">
            ПОДАРУНКИ, ЯКІ ВРАЖАЮТЬ
          </h2>
          <div className="mt-[69px] mb-[38px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
          <div className="max-w-[435px] text-[#C1C1C1] text-base font-normal text-center lg:text-left">
            Не знаєте що подарувати людині, у якої все є? Даруйте сертифікат на
            навчання у PREMIUM школі RSMOTO School & Harley Davidson.
          </div>
          <div className="mt-12">
            <button className="px-[29px] lg:px-[35px] xl:px-[39px] py-[21px] rounded-xl bg-[#EB601D] text-white text-base font-medium uppercase leading-normal">
              Замовити сертифікат
            </button>
          </div>
        </div>
        <div className="max-w-[756px]">
          <img className="w-full h-full object-cover" src={gift} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gifts;

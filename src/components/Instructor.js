import instructor from "../asserts/instructor-big.png";

function Instructor() {
  return (
    <section className="px-[15px] mx-0 sm:mx-[9.6px] pb-[123px] pt-[156px]">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center relative lg:mt-[151px] lg:mb-[129px]">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-once="true"
          className="z-20 relative flex flex-col items-center lg:items-start text-center lg:text-start"
        >
          <h2 className="text-[#fff] text-[19px] sm:text-[40px] max-w-[570px] font-bold leading-normal tracking-[1.6px] uppercase">
            професійний підхід до навчання від Олександра Георгіци
          </h2>
          <div className="mt-[19px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
          <div className="mt-[38px] max-w-[603px] text-center lg:text-start">
            <p className="text-[#C1C1C1] text-sm sm:text-base font-normal">
              За гроші можна купити майже все, але досвід – бесцінний.
              <br />
              <br />
              Олександр Георгіца - власник мотошколи RSMOTO та багаторазовий
              чемпіон України з мотоперегонів. Має більше 15 років в управлінні
              мотоциклом, яким він ділиться зі своїми учнями.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
          className='relative lg:absolute lg:left-[30%] mt-14 lg:mt-0 after:content-[""] after:absolute after:w-full after:h-[60%] after:bg-gradient-moto after:bottom-[0] after:left-0 '
        >
          <div className='relative after:content-[""] after:absolute after:w-[40%] after:h-full after:bg-gradient-moto-vertical after:top-0 after:right-0'>
            <img src={instructor} alt="Instructor" />
            <div className=" z-[-1] absolute top-[15%] sm:top-[10%] left-[25%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px] rounded-full bg-[#EB601D] blur-[15px] sm:blur-[60px] md:blur-[80px] lg:blur-[70px] xl:blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;

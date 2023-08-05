import motorbike from "../asserts/harley-davidson.png";

function AboutBikes() {
  return (
    <section>
      <div className="px-[15px] mx-0 sm:mx-[9.6px] pt-[110px] pb-[192.44px] flex flex-col items-center">
        <h2 className="max-w-[600px] text-center text-white text-[18px] sm:text-[40px] font-bold leading-normal tracking-[1.6px] uppercase">
          Байк Harley Davidson sportster 1200
        </h2>
        <div className="my-[37px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
        <p className="max-w-[505px] text-center text-[#C1C1C1] text-sm sm:text-base font-normal">
          Швидкий та потужний представник двохколісних – <br />{" "}
          <strong>Harley Davidson Sportster 1200.</strong>
          <br />
          <br />
          Байк, що чудово підходить для навчання та дозволяє отримати максимум
          задоволення від керування.
        </p>
        <div className="relative">
          <img
            className="z-10"
            src={motorbike}
            alt="Harley Davidson Sportster 1200"
          />
          <div className=" z-[-1] absolute top-[10%] sm:top-[13%] left-[20%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-[550px] xl:h-[550px] rounded-full bg-[#EB601D] blur-[15px] sm:blur-[60px] md:blur-[80px] lg:blur-[70px] xl:blur-[100px]"></div>
        </div>
        <h2 className="mt-[120px] max-w-[816px] text-white text-center text-[18px] sm:text-[40px] font-bold leading-normal tracking-[1.6px] uppercase">
          БІЛЬШЕ ПРО PREMIUM НАВЧАННя У ВІДЕО:
        </h2>
        <div className="my-[37px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
        <div className="w-full">
          <iframe
            className="w-full min-h-[250px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[709px]"
            src="https://www.youtube.com/embed/aQ9-LFx8slw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default AboutBikes;
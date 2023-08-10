import ApplicationForm from "./ApplicationForm";

function Application() {

  return (
    <section>
      <div
        data-aos="zoom-in-down"
        data-aos-delay="400"
        data-aos-once="true"
        className="px-[15px] mx-0 sm:mx-[9.6px] pb-[132px] pt-[129px] md:pt-[229px] md:pb-[232px]"
      >
        <ApplicationForm headerText={'ЗАЦІКАВИВ КУРС?'} />
      </div>
    </section>
  );
}

export default Application;

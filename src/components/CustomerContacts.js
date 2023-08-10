import ApplicationForm from "./ApplicationForm";

function CustomerContacts() {
  return (
    <section className="bg-contacts-motorcycle bg-[lightgray] bg-no-repeat bg-cover bg-[50%]">
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-once="true"
        className="px-[15px] mx-0 sm:mx-[9.6px] pt-[87px] pb-[63px]"
      >
        <ApplicationForm headerText={'БАЖАЕШ ОПАНУВАТИ БАЙК?'} />
      </div>
    </section>
  );
}

export default CustomerContacts;

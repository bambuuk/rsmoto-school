import useApplicationForm from "../hooks/useApplicationForm";

function ApplicationForm({ headerText }) {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    isSubmitted,
    onSubmit,
  } = useApplicationForm();

  return (
    <>
      <div
        className={
          isSubmitted
            ? "opacity-0 invisible transition-all ease-out flex flex-col items-center"
            : "opacity-100 visible transition-all ease-in flex flex-col items-center"
        }
      >
        <h2 className="text-center sm:text-start text-[24px] sm:text-[34px] md:text-[40px] text-[#fff] font-bold leading-normal tracking-[1.6px] uppercase">
          {headerText}
        </h2>
        <div className="my-[28px] w-[80px] h-[4px] rounded-sm bg-[#EB601D]"></div>
        <div className="max-w-[385px] text-center text-[#C1C1C1] text-base font-normal">
          Залишай заявку та наш менеджер зв’яжеться з тобою найближчим часом
        </div>
        <div className="mt-[40px] sm:mt-[72px] w-full">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col items-center xl:flex-row xl:justify-around flex-wrap gap-4 xl:gap-0">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ім'я"
                className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Телефон"
                className="max-w-[346px] w-full bg-transparent border-b rounded-bl-[1px] border-[#41454E] focus:border-[#EB601D] transition-colors pl-[7px] pr-[10px] py-[11px] outline-none text-white text-base sm:text-lg leading-normal font-medium tracking-[0.36px]"
              />
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
      <div
        className={
          !isSubmitted
            ? "opacity-0 invisible w-full absolute top-[50%] translate-y-[-50%] left-0 flex justify-center items-center flex-col transition-all ease-out"
            : "w-full absolute top-[50%] translate-y-[-50%] left-0 flex justify-center items-center flex-col transition-all ease-in visible opacity-100"
        }
      >
        <div className="text-4xl text-white text-center font-bold">
          Дякуємо!
        </div>
        <div className="text-xl text-white text-center mt-6 px-3">
          Заявка успішно відправлена!
        </div>
      </div>
    </>
  );
}

export default ApplicationForm;



function Promo () {
  return (
    <section className="px-[15px] mx-[9.6px] pt-[60]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#fff] text-[70px] font-extrabold tracking-[2.8px] uppercase leading-normal">ПЕРША ПРЕМІАЛЬНА</h2>
        <div className="text-[40px] text-[#fff] font-medium tracking-[1.6px] uppercase leading-normal">МОТОШКОЛА УКРАЇНИ</div>
        <p className="max-w-[416px] text-[#C1C1C1] text-base font-normal text-center">Ексклюзивна колаборація від легендарних Harley Davidson та мотошколи RSMOTO. </p>
        <div className="flex gap-[24.67px] pt-[30px]">
          <button className="px-[39px] py-[21px] rounded-xl bg-[#EB601D] text-base font-medium uppercase leading-normal">залишити заявку</button>
          <button className="px-[39px] py-[21px] bg-black bg-opacity-50 border border-solid border-[#fff] rounded-xl text-[#fff] text-base font-medium uppercase leading-normal">У мене є сертифікат</button>
        </div>
      </div>
    </section>
  )
}

export default Promo;
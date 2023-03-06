import { benefitsData } from "../../data";
import { workouts } from "../../data";

export function Benefits() {

  const { icon } = workouts;

  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583987921452';
  };


  return (
    <section id='benefits' className='bg-benefit bg-no-repeat bg-cover '>
      <div className="container mx-auto">
        <div className="w-full max-w-[1440px] flex flex-col pt-12 pb-24 gap-8 px-12 items-center justify-center">

          {/* <h1>Benefits</h1> */}
          <div
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-offset='400'
            className="section-title-group flex justify-center items-center max-w-[740px] mx-auto lg:px-0 mt-6 "

          >
            <img src={icon} alt="" className="" />
            <h2
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
              className="h3">Porque escolher a Access Golden?
              <span className="text-[rgb(31,31,186)]">.</span>
            </h2>
          </div>
          <div
            /*      data-aos='fade-up'
                 data-aos-delay='400'
                 data-aos-offset='400' */
            className="flex flex-col items-center lg:flex-row gap-x-6 gap-y-6 justify-center"
          >
            {benefitsData.map((benefit, i) => {
              return (
                <div className="w-full lg:w-1/3 flex flex-col bg-[#fff] rounded-3xl p-8 gap-y-6 text-[#111] items-center justify-center min-h-[300px] border-solid border-4 border-[#daa520]" key={i}>
                  <div className="mx-auto justify-center flex flex-col items-center gap-y-4">
                    {benefit.icon}
                    <span className='flex mt-1 items-center justify-center text-[16px] font-semibold mx-auto'>{benefit.details}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
}

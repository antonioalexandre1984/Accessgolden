import { benefitsData } from "../../data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { workouts } from "../../data";
import { BsWifi } from "react-icons/bs";

export function Benefits() {

  const { icon } = workouts;

  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583987921452';
  };


  return (
    <section id='benefits' className='bg-benefit bg-no-repeat bg-cover '>
      <div className="container mx-auto">
        <div className="w-full max-w-[1440px] flex flex-col pt-12 pb-24 gap-8 px-12 justify-center">

          {/* <h1>Benefits</h1> */}
          <div
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-offset='400'
            className="section-title-group max-w-[740px] mx-auto lg:px-0 mt-2 "

          >
            <img src={icon} alt="" className="" />
            <h2
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
              className="h3">Porque escolher a Access Golden?
              <span className="text-[rgb(31,31,186)]">.</span>
            </h2>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-offset='400'
            className="flex flex-col items-center lg:flex-row gap-x-6 gap-y-4 justify-center"
          >
            {benefitsData.map((benefit, i) => {
              return (
                <div className="flex flex-col bg-[#fff] rounded-3xl p-8 gap-y-6 text-[#111] items-center min-h-[300px] border-dotted border-2 border-indigo-600" /* style={{ width: "30%", height: "auto" }} */ key={i}>
                  <div className="mx-auto ">
                    {benefit.icon}
                    <span className='flex mt-1 items-center justify-center text-[16px] font-semibold mx-auto'>{benefit.details}
                    </span>
                  </div>
                  <button
                    onClick={WhatsAppButton}
                    className="btn btn-sm lg:btn-lg btn-secondary rounded-xl">Quero este!</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
}

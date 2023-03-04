import { pricing } from '../../data';
import { PlanList } from '../PlanList';

export function Pricing() {
  const { icon, title, plans } = pricing;

  return (
    <section id='pricing' className='bg-bgbanner bg-no-repeat bg-cover'>
      <div className="container mx-auto" >
        <div
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          className="w-full max-w-[1440px] mx-auto flex flex-col pt-12 pb-32 px-4 ">
          {/* section title */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="section-title-group max-w-[540px]  mx-auto px-4 mt-24 mb-24  lg:px-0" >
            <img src={icon} alt="" className="h2" />
            <h2 className="h1 text-[#fff] " style={{ textShadow: "0 0 10px rgba(0,0,0,2)" }}>
              {title}
              <span className="text-[rgb(31,31,186)] shadow-2xl">.</span>
            </h2>
          </div >
          {/* plan list */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:items-center">
            <PlanList plans={plans} />
          </div >
        </div >
      </div>
    </section >
  );
}

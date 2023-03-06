import { faq } from '../../data';
import { Accordion } from '../Accordion';

export function Faq() {
  const { icon, title, accordions } = faq;
  return (
    <section id='faq' className='bg-banner bg-no-repeat bg-cover'>
      <div className="pt-12 lg:pt-24  pb-36">
        <div className="max-w-[768px] mx-auto lg:h-[740px] lg:pt-6">
          {/* section title */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay='400'
            className="section-title-group max-w-[540px]  mx-auto px-4 mt-12 mb-24  lg:px-0" >
            <img src={icon} alt="" className="h2" />
            <h2 className="h1 section-title text-[#fff] " style={{ textShadow: "0 0 10px rgba(0,0,0,2)" }}>
              {title}
              <span className="text-[rgb(31,31,186)] shadow-2xl">.</span>
            </h2>
          </div >
          {/* accordions */}
          <div
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-offset='300'
            className="flex flex-col gap-y-5 px-4">
            {accordions.map((accordion, index) => (
              <Accordion key={index} accordion={accordion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

export function PlanList({ plans }) {

  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583986124287';
  };

  const [index, setIndex] = useState(0);
  return (
    <section id='planList'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan, currentIndex) => {
            // destructure plan data
            const { name, price, list, delay, planName } = plan;
            return (
              <div
                key={currentIndex}
                onClick={() => setIndex(currentIndex)}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="200"
                className="w-full md:max-w-[620px] lg:max-w-[405] rounded-sm px-4 lg:min-h-[550px] "
              >

                <div
                  className={`${currentIndex === index
                    ? 'bg-[rgb(31,31,186)] text-[#fff]'
                    : 'bg-[#fff] text-[rgb(31,31,186)]'
                    } flex  justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] rounded-xl transition duration-100 drop-shadow-2xl`}>

                  <div
                    style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                    className="flex flex-col lg:flex-col gap-x-8 gap-y-12 lg:gap-x-0 items-center" >
                    {/* plan name & price wrapper */}

                    <div className="">
                      {/* plan name */}

                      <div
                        className={`${currentIndex === index
                          ? 'bg-[#dbdbdb] text-[rgb(31,31,186)]'
                          : 'bg-[rgb(31,31,186)] text-[#dbdbdb]'}
                        }h-[26px] font-primary text-2xl font-semibold max-w-min mx-auto px-[48px] py-[16px] flex items-center mb-8 justify-center bg-red-600 rounded-xl`}>
                        {name}
                      </div>
                      {/* plan price */}
                      <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center gap-y-3 mt-3">
                        <div className="leading-none">
                          <span className="text-[20px] lg:text-[30px]">R$</span>
                          <span className="text-[40px] lg:text-[50px]">{price}</span>
                        </div>
                        <span

                          className="text-[32px] text-[#d34343] lg:text-[36px]">{planName}</span>
                      </div>
                    </div>
                    {/* plan list */}
                    <div className='flex flex-col items-center'>
                      {/* list */}
                      <ul className="flex flex-col gap-y-8 m-6 px-0">
                        {list.map((item, i) => {
                          return (
                            <li
                              key={i}
                              className="flex items-center gap-x-[24px]">
                              <div className="">
                                <BsCheckCircleFill size={24} className='text-lg' />
                              </div>
                              <div className="font-primary text-[16px]">{item.name}</div>
                            </li>
                          );
                        })}
                      </ul>
                      {/* btn */}
                      <button
                        onClick={WhatsAppButton}
                        className='shadow-red-800 btn btn-sm lg:btn-lg btn-secondary rounded-xl hover:shadow-2xl'>
                        Assine agora!
                      </button>
                    </div>
                  </div>
                </div >
              </div >
            );
          })}
        </div >
      </div>
    </section >
  );
}

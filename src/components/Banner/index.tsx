import { banner } from '../../data';
import about from '../../assets/img/banner/about.png';
import { useEffect, useState } from 'react';

export function Banner() {

  const [isMobile, setIsMobile] = useState(false);

  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583986124287';
  };


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section id='banner' className=" bg-banner h-[890px]">
      <div className="container mx-auto h-full ">
        <div className="flex items-center h-full relative justify-center  ">
          {/* text Left */}

          <div className='flex flex-col z-10 mt-24'>
            <div className="flex flex-row z-10">
              <h1
                data-aos='fade-down'
                data-aos-offset='500'
                style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
                className="text-[#f7b32b] text-7xl font-bold absolute top-60 left-0 z-10">
                {titlePart1}
              </h1>
            </div>
            <div

              data-aos='fade-down'
              data-aos-delay='500'
              style={{ textShadow: "0 0 10px rgba(0,0,0,2.5)" }}
              className="">
              <h1 className='h1 text-[#dbdbdb] mb-8'>{titlePart2}</h1>
            </div>
            <h2
              style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
              data-aos="fade-down"
              data-aos-delay="700"
              className="text-[#f4f0f0] text-2xl font-bold mb-8">{subtitle}</h2>
            <div>
              <button
                style={{ textShadow: "0 0 10px rgba(0,0,0,2.5)" }}
                data-aos="fade-down"
                data-aos-delay="900"
                onClick={WhatsAppButton}
                className="shadow-red-800  btn btn-lg lg:btn-lg btn-secondary rounded-xl">{textBtn}</button>
            </div>

          </div>
          {/* image Right */}
          {!isMobile && (
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="flex w-full z-999 relative drop-shadow-2xl justify-end h-full">
              <img src={about} alt="" className="drop-shadow-2xl  mt-[200px] w-[590px] h-[590px] " />
            </div>
          )}
        </div>
      </div >
    </section >
  );
}

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiper.css';

export function TestSlider() {

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {testimonials.map((item, i) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide
              key={i} >
              <div className="flex flex-col lg:flex-row gap-12 mb-24 lg:gap-12">
                <div className=" w-48 h-38 lg:w-[328px] lg:h-[328px]">
                  <img src={authorImg} alt="" className="rounded-2xl" />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-xl mb-8  italic font-normal">
                    {authorText}
                  </h5>
                  <div className="text-lg ">
                    <p className="">
                      {authorName}
                    </p>
                    <p className="">
                      {authorPosition}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide >
          );
        })}
      </Swiper>
    </>
  );
}

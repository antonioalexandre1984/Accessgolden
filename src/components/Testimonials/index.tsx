import { TestSlider } from "../TestSlider";
import { community } from "../../data";

export function Testimonials() {
  const { icon } = community;
  return (
    <section id='testimonials'>
      <div className="container mx-auto px-4 md:px-0 mt-48 py-8 md:py-0">
        <div
          /* data-aos='fade-up'
          data-aos-delay='400'
          data-aos-offset='400' */
          className="section-title-group max-w-[740px] mx-auto md:px-0 mt-48 md:mt-0">
          <img src={icon} alt="" className="" />
          <h2
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
            className="h1">O que dizem nossos clientes?
            <span className="text-[rgb(31,31,186)]">.</span>
          </h2>
        </div>
        <TestSlider />
      </div>
    </section>
  );
}
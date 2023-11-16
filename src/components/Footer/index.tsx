import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { footer } from '../../data';
import bg from '../../assets/img/header/bg.png';

export function Footer() {
  const { copyrightText } = footer;
  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583987921452';
  };

  return (
    <section className="bg-[#daa520]  p-[20px]">
      <div className="container mx-auto w-full h-full flex flex-row justify-center items-center"
      >
        <div className="flex flex-col  justify-between items-center">
          {/* Logo */}
          <a href="#" className='shadow-orange-800'>
            <img className="w-[100px] shadow-orange-800" src={bg} alt="" />
          </a>
          {/* copyrightText */}
          <p className="text-[#111] md:text-[16px] text-sm text-center font-semibold">
            {copyrightText}
          </p>

          <div className="flex flex-row items-center gap-x-2">
            <p className="text-[#111] font-semibold text-[16px] md:text-[16px] ">
              Desenvolvido por Antonio Alexandre - 83 <button
                onClick={WhatsAppButton}
              >98792-1452</button>
            </p>
            <a href=" https://www.github.com/antonioalexandre1984/">
              <IoLogoGithub size={20} color="#111" />
            </a>
            <a href=" https://www.linkedin.com/in/antonioacs/">
              <IoLogoLinkedin size={20} color="#0e76a8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { footer } from '../../data';
import { header } from '../../data';

export function Footer() {
  const { copyrightText } = footer;
  const { logo } = header
  return (
    <section className="bg-[#daa520]  p-[20px]">
      <div className="container mx-auto w-full h-full flex flex-row justify-center items-center"
      >
        <div className="flex flex-col  justify-between items-center">
          {/* Logo */}
          <a href="#" >
            <img className="w-[100px] " src={logo} alt="" />
          </a>
          {/* copyrightText */}
          <p className="text-[#111] md:text-[16px] text-sm text-center font-semibold">
            {copyrightText}
          </p>

          <div className="flex flex-row items-center gap-x-2">
            <p className="text-[#111] font-semibold text-[12px] md:text-[16px] ">
              Developer by Antonio Alexandre
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

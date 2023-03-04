import { header } from '../../data';
import { Nav } from "../Nav";
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import { NavMobile } from "../NavMobile";
import { useEffect, useState } from "react";
import { Socials } from '../Socials';

export function Header() {
  // Header state
  const [isActive, setIsActive] = useState(false);
  // navMobile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    }, { passive: true });
  }, []);

  // destructure header data
  const { logo } = header;

  return (
    <div className="container mx-auto">
      <div
        style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
        className={`${isActive
          ? ' bg-gray-700 bg-opacity-70  py-[6px]'
          : ' bg-transparent py-[40px] '} 
       fixed  left-0 right-0 flex justify-center gap-x-12 items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300 overflow-hidden`}>
        {/* logo */}
        <a href="#">
          <img className="h-[50px] " src={logo} alt="" />
        </a>
        {/* nav - initially hidden - show on desktop */}
        <Nav />
        {/* nav menu btn - initially show - hide on desktop */}

        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden  absolute right-4'>
          {navMobile
            ? (<RiCloseFill className="text-[#efeff4] text-3xl cursor-pointer" />)
            : (<RiMenu4Fill className="text-[#e8e8ef] text-3xl cursor-pointer" />)}

        </div>
        {/* navMobile  - initially hidden - show on mobile */}
        <NavMobile navMobile={navMobile} />
      </div >
    </div>
  );
}

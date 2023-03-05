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
  /*   const [navMobile, setNavMobile] = useState(false); */
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // destructure header data
  const { logo } = header;

  return (

    <header
      style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
      className={`${isActive ? 'bg-[#daa520] h-20 opacity-80 ]' : 'h-24'} flex items-center fixed right-0 top-0 w-full text-white z-10 transition-all duration-300`}>
      < div className="container mx-auto h-full flex items-center justify-between" >
        {/* logo */}
        <a href="#" >
          <img className="h-[50px] " src={logo} alt="" />
        </a>
        {/* nav - initially hidden - show on desktop */}
        < Nav />
        {/* nav menu btn - initially show - hide on desktop */}

        {/*       <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden  absolute right-4'>
          {navMobile
            ? (<RiCloseFill className="text-[#efeff4] text-3xl cursor-pointer" />)
            : (<RiMenu4Fill className="text-[#e8e8ef] text-3xl cursor-pointer" />)}

        </div> */}
        {/* navMobile  - initially hidden - show on mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div >
    </header >
  );
}

import { nav } from '../../data'
import { Socials } from '../Socials';

interface navMobileProps {
  navMobile: boolean;
}

export function NavMobile({ navMobile }: navMobileProps) {

  return (
    <nav
      className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-200 fixed top-0 left-0 right-0 -bottom-12 -z-10  transition-all h-0 overflow-hidden`}>
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.href} className="text-body-md text-[#302C8F] hover:text-[#73d2de] ">
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
      <div className="w-full absolute  bottom-0 text-[#302c8f] hover:text-[#73d2de] p-6  bg-neutral-200 ">
        <Socials />
      </div>
    </nav >
  );
}

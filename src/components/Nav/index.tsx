import { nav } from "../../data";
import { Link } from 'react-scroll';

export function Nav() {
  return (
    <nav className="hidden lg:flex ">
      <ul className="flex gap-x-8 text-[#fff] text-body-md">
        {nav.map((item, i) => {
          return (
            <li key={i}>
              <Link
                to={item.href}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className=" hover:text-[#e8e6ec] transition duration-300 cursor-pointer">
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

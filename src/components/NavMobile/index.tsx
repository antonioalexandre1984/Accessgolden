import { nav } from '../../data'
import { Socials } from '../Socials';
import { Link } from 'react-scroll'
import { XIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { useState } from 'react';

export function NavMobile(/* { navMobile }: navMobileProps */) {

  const [isOPen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 160,
        damping: 60,
      }
    },
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    },
  }

  function handleMenuClick(section) {
    setActiveSection(section);
    setIsOpen(!isOPen);
  }

  return (
    <nav className='relative z-2'>
      <div className="cursor-pointer text-white">
        <MenuAlt3Icon
          onClick={() => setIsOpen(!isOPen)}
          className="h-8 w-8"
        />
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOPen ? 'visible' : 'hidden'}
          className="w-4 h-4  bg-[#daa520]   rounded-full top-0 right-0 fixed">
        </motion.div>
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate={isOPen ? 'visible' : 'hidden'}
          className={`${isOPen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>

          <div
            onClick={() => setIsOpen(!isOPen)}
            className="cursor-pointer absolute top-8  right-8 text-white">
            <XIcon className="h-8 w-8 " />
          </div>
          {nav.map((item, i) => {
            return (
              <li key={i} className='mb-8'>
                <Link
                  to={item.href}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  duration={500}
                  className="text-body-md  text-[#e7e7ed] cursor-pointer hover:text-[#111]"
                  onClick={() => handleMenuClick(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
          <div className="absolute bottom-6">
            <Socials />
          </div>
        </motion.ul>
      </div>
    </nav >
  );
}

import { socialData } from '../../data';

export function Socials() {
  return (
    <ul className='flex justify-center items-center gap-x-[30px]'>
      {socialData.map((item, i) => {
        return (
          <li key={i}>
            <a href={item.href} className="text-3xl text-[#302c8f] hover:text-[#73d2de]">{item.icon}</a>
          </li>
        )
      })}
    </ul >
  );
}

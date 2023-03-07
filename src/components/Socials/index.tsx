import { socialData } from '../../data';

export function Socials() {
  return (
    <ul className='flex justify-center items-center gap-x-[30px]'>
      {socialData.map((item, i) => {
        return (
          <li key={i}>
            <a href={item.href} className="text-3xl text-[#e7e7ed] hover:text-[#111]">{item.icon}</a>
          </li>
        )
      })}
    </ul >
  );
}

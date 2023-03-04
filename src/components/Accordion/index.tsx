import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';
import { useState } from 'react';

interface AccordionProps {
  accordion: {
    question: string;
    answer: string;
  };
}

export function Accordion({ accordion }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer' >
      <div className="bg-purple-50 border rounded-xl  shadow-xl">
        <div className="min-h-[48px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div className="">
            {isOpen ?
              (
                <FaChevronCircleUp className="text-[20px] text-neutral-500" />
              ) : (
                <FaChevronCircleDown className="text-[20px] text-neutral-500" />
              )}
          </div>
        </div>
        <div
          className={`${isOpen
            ? 'min-h-[200px] lg:min-h-[160px]'
            : 'min-h-[10px]'}
            max-h-0 overflow-hidden transition-all duration-300 ease-in-out flex justify-center px-[30px]`}>
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
}

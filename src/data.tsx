// images
import Logo from '../src/assets/img/header/logo.png';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

import { GrFacebookOption, GrServerCluster } from 'react-icons/gr';
import { IoIosCheckmarkCircleOutline, IoLogoInstagram } from 'react-icons/io';
import { IoLogoPinterest } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoYoutube } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { GiConsoleController } from 'react-icons/gi';
import { BsWifi } from 'react-icons/bs';
import { BsChatSquareText } from 'react-icons/bs';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';




export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignUpText: 'Sign Up',
};

export const nav = [
  { href: 'banner', name: 'Home' },
  { href: 'benefits', name: 'Vantagens' },
  { href: 'pricing', name: 'Planos' },
  { href: 'testimonials', name: 'Nossos Clientes' },
  { href: 'faq', name: 'FAQ' },
  { href: 'contact', name: 'Fale Conosco' },
];

export const banner = {
  titlePart1: 'Access Golden!',
  titlePart2: ' Sua melhor conexão. ',
  subtitle:
    'A internet de ultravelocidade para você ir mais longe.',
  textBtn: 'Assine agora!',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Our misson',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Training programs',
  programs: [
    {
      image: ResistanceImg,
      name: 'Resistance',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Full Body',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Nossos Planos',
  plans: [
    {
      name: 'Basic',
      planName: '40 MEGAS',
      price: '39,99',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '40 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
        { name: 'Instalação Gratuita' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      planName: '50 MEGAS',
      price: '49,99',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '50 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
        { name: 'Instalação Gratuita' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '69,99',
      planName: '70 MEGAS',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '70 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
        { name: 'Instalação Gratuita' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Dúvidas',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'What age do I need to be to join?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Are there any lockers?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Gymme 2022.',
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Gallery' },
    { href: '/', name: 'Interview' },
    { href: '/', name: 'Articles' },
    { href: '/', name: 'Contact' },
  ],
};


export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const benefitsData = [
  {
    icon: <BsWifi className="w-12 h-12 text-[#f3a712]" />,
    heading: "WiFi Potente",
    details:
      "Conecte vários dispositivos ao mesmo tempo. Com a Access Golden Telecom você não tem limites!.",
  },
  {
    icon: <GiConsoleController className="w-12 h-12 text-[#f3a712]" />,
    heading: "Alto Desempenho",
    details:
      "Conecte vários dispositivos ao mesmo tempo. Com a Access Golden Telecom você não tem limites!",
  },

  {
    icon: <BsChatSquareText className="w-12 h-12 text-[#f3a712]" />,
    heading: "Health Fitness",
    details:
      "Qualidade e agilidade de atendimento, sempre pronta para melhor atendê-lo.",
  },
];


// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail size={24} color='#111' />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin size={24} color='#d11149' />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];









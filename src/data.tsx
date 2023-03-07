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
import { BsTelephoneInbound, BsWifi } from 'react-icons/bs';
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
  { href: 'faq', name: 'Dúvidas' },
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
      name: 'Plus',
      planName: '30 MEGAS',
      price: '50,00',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '30 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      planName: '60 MEGAS',
      price: '55,00',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '60 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '70,00',
      planName: '100 MEGAS',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '100 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
      ],
      delay: 1000,
    },
    {
      name: 'Turbo',
      price: '99,00',
      planName: '200 MEGAS',
      list: [
        { name: '100% Fibra Óptica' },
        { name: 'Roteador WIFI em locação' },
        { name: '200 MEGA Download' },
        { name: 'Sem limite de Download e Upload' },
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
      question: 'O que é fibra óptica?',
      answer:
        'A fibra óptica é uma estrutura de vidro cilíndrica, transparente, flexível e com dimensões microscópicas, parecidas com um fio de cabelo. É uma forma de transmissão que permite o tráfego de dados com velocidades próximas à velocidade da luz. O sinal da fibra óptica é transmitido por meio de reflexões de raios laser ao longo de todo o cabo, atingindo uma capacidade de transmissão única.',
    },
    {
      question: 'Por que a fibra é superior a outras tecnologias?',
      answer:
        'Velocidade de transmissão de dados é maior que de outras tecnologias, como o cabo coaxial e o par trançado.Maior estabilidade de sinal. Não sofre interferências ou quedas de transmissão.'
    },
    {
      question: 'O que é Wi-Fi de alta performance?',
      answer:
        'É disponibilizado em comodato para os clientes um modem de última geração. Dependendo da viabilidade técnica da região ou dos aparelhos utilizados pelo cliente pode ser um modem que trabalha na frequência 2.4 ou um dual band no qual opera com 2 frequências de rede (2.4Ghz e 5.0Ghz).',
    },
    {
      question: 'A Minha internet está lenta, o que eu faço?',
      answer:
        'Desligue o modem e o roteador particular, caso possua, e aguarde 5 minutos. Ligue o modem e aguarde 5 minutos. Ligue o roteador particular, caso possua, e aguarde 5 minutos. Faça uma limpeza no seu navegador, excluindo cookies e arquivos temporários.',
    },
    {
      question: 'O que é a velocidade de download?',
      answer:
        'É a velocidade de recebimento de dados (como um arquivo, vídeo, etc) de outro computador ou servidor para um computador local através da Internet. Usuários domésticos tendem a realizar mais downloads do que uploads.',
    },
    {
      question: 'O que é a velocidade de upload?',
      answer:
        'É a velocidade de envio de dados (como um arquivo, e-mail, foto, etc) de um computador em um local para um computador ou servidor em outro local, através da Internet. A velocidade de upload é geralmente muito menor do que a velocidade de download. A razão para isso é que as pessoas, ao acessar a Internet, geralmente fazem mais download do que upload.',
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
  copyrightText: 'Access Golden telecomunicações 2023.Todos os direitos reservados.CNPJ. 21.423.914/0001-35'
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
    icon: <BsWifi className="w-16 h-16 text-[#f3a712]" />,
    heading: "WiFi Potente",
    details:
      "Conecte vários dispositivos ao mesmo tempo. Com a Access Golden Telecom você não tem limites!.",
  },
  {
    icon: <GiConsoleController className="w-16 h-16 text-[#f3a712]" />,
    heading: "Alto Desempenho",
    details:
      "Conecte vários dispositivos ao mesmo tempo. Com a Access Golden Telecom você não tem limites!",
  },

  {
    icon: <BsChatSquareText className="w-16 h-16 text-[#f3a712]" />,
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
      'Venho acompanhando a evolução da Access Golden Telecom, e posso dizer que a empresa vem crescendo a cada dia, com um atendimento de qualidade e um serviço de qualidade, parabéns a toda equipe da Access Golden Telecom.',
    authorName: 'Larissa Oliveira',
    authorPosition: 'Estudante ',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Eu sou muito exigente quando se diz respeito a qualidade da internet, e a Access Golden Telecom me surpreendeu, com uma internet de qualidade e preço justo.',
    authorName: 'Olivia Santos',
    authorPosition: 'Atendente - Trabalha remotamente',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Não tem mais nada mais satisfatório do que ter o bom e barato em sua casa.Com os planos da Access Golden Telecom eu pude escolher um que fosse complemente compátivel com meu bolso.Estou muito satisfeito.Vou recomendar para as minhas amigas e familiares.',
    authorName: 'Eliane Carvalho',
    authorPosition: 'Influenciadora Digital',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail size={24} color='#111' />,
    title: 'Alguma Dúvida?',
    subtitle: 'Estamos aqui para te ajudar.',
    description: 'Email accessgolden@gmail.com',
  },
  {
    icon: <FiMapPin size={24} color='#d11149' />,
    title: 'Current Location',
    subtitle: 'R. Amaury Araújo de Vasconcelos- SN',
    description: 'Três Irmãs, Campina Grande - PB',
    description2: 'Campina Grande - PB, 58424-715',
  },
  {
    icon: <BsTelephoneInbound size={24} color='#440eb8' />,
    title: 'Contato',
    subtitle: '(83) 2148 - 6920',
    description: '(83) 98612 - 4287',
  },
];









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
  { href: 'faq', name: 'D??vidas' },
  { href: 'contact', name: 'Fale Conosco' },
];

export const banner = {
  titlePart1: 'Access Golden!',
  titlePart2: ' Sua melhor conex??o. ',
  subtitle:
    'A internet de ultravelocidade para voc?? ir mais longe.',
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
        { name: '100% Fibra ??ptica' },
        { name: 'Roteador WIFI em loca????o' },
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
        { name: '100% Fibra ??ptica' },
        { name: 'Roteador WIFI em loca????o' },
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
        { name: '100% Fibra ??ptica' },
        { name: 'Roteador WIFI em loca????o' },
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
        { name: '100% Fibra ??ptica' },
        { name: 'Roteador WIFI em loca????o' },
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
        '???Great location, great price and great, helpful people. What to want more????',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '???Gymme changed my life. Not only physically but mentally as well. I???m a better mother, and all around better human being because of this gym.???',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '???Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!???',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '???Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!???',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'D??vidas',
  accordions: [
    {
      question: 'O que ?? fibra ??ptica?',
      answer:
        'A fibra ??ptica ?? uma estrutura de vidro cil??ndrica, transparente, flex??vel e com dimens??es microsc??picas, parecidas com um fio de cabelo. ?? uma forma de transmiss??o que permite o tr??fego de dados com velocidades pr??ximas ?? velocidade da luz. O sinal da fibra ??ptica ?? transmitido por meio de reflex??es de raios laser ao longo de todo o cabo, atingindo uma capacidade de transmiss??o ??nica.',
    },
    {
      question: 'Por que a fibra ?? superior a outras tecnologias?',
      answer:
        'Velocidade de transmiss??o de dados ?? maior que de outras tecnologias, como o cabo coaxial e o par tran??ado.Maior estabilidade de sinal. N??o sofre interfer??ncias ou quedas de transmiss??o.'
    },
    {
      question: 'O que ?? Wi-Fi de alta performance?',
      answer:
        '?? disponibilizado em comodato para os clientes um modem de ??ltima gera????o. Dependendo da viabilidade t??cnica da regi??o ou dos aparelhos utilizados pelo cliente pode ser um modem que trabalha na frequ??ncia 2.4 ou um dual band no qual opera com 2 frequ??ncias de rede (2.4Ghz e 5.0Ghz).',
    },
    {
      question: 'A Minha internet est?? lenta, o que eu fa??o?',
      answer:
        'Desligue o modem e o roteador particular, caso possua, e aguarde 5 minutos. Ligue o modem e aguarde 5 minutos. Ligue o roteador particular, caso possua, e aguarde 5 minutos. Fa??a uma limpeza no seu navegador, excluindo cookies e arquivos tempor??rios.',
    },
    {
      question: 'O que ?? a velocidade de download?',
      answer:
        '?? a velocidade de recebimento de dados (como um arquivo, v??deo, etc) de outro computador ou servidor para um computador local atrav??s da Internet. Usu??rios dom??sticos tendem a realizar mais downloads do que uploads.',
    },
    {
      question: 'O que ?? a velocidade de upload?',
      answer:
        '?? a velocidade de envio de dados (como um arquivo, e-mail, foto, etc) de um computador em um local para um computador ou servidor em outro local, atrav??s da Internet. A velocidade de upload ?? geralmente muito menor do que a velocidade de download. A raz??o para isso ?? que as pessoas, ao acessar a Internet, geralmente fazem mais download do que upload.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We???ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Access Golden telecomunica????es 2023.Todos os direitos reservados.CNPJ. 21.423.914/0001-35'
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
      "Conecte v??rios dispositivos ao mesmo tempo. Com a Access Golden Telecom voc?? n??o tem limites!.",
  },
  {
    icon: <GiConsoleController className="w-16 h-16 text-[#f3a712]" />,
    heading: "Alto Desempenho",
    details:
      "Conecte v??rios dispositivos ao mesmo tempo. Com a Access Golden Telecom voc?? n??o tem limites!",
  },

  {
    icon: <BsChatSquareText className="w-16 h-16 text-[#f3a712]" />,
    heading: "Health Fitness",
    details:
      "Qualidade e agilidade de atendimento, sempre pronta para melhor atend??-lo.",
  },
];


// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Venho acompanhando a evolu????o da Access Golden Telecom, e posso dizer que a empresa vem crescendo a cada dia, com um atendimento de qualidade e um servi??o de qualidade, parab??ns a toda equipe da Access Golden Telecom.',
    authorName: 'Larissa Oliveira',
    authorPosition: 'Estudante ',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Eu sou muito exigente quando se diz respeito a qualidade da internet, e a Access Golden Telecom me surpreendeu, com uma internet de qualidade e pre??o justo.',
    authorName: 'Olivia Santos',
    authorPosition: 'Atendente - Trabalha remotamente',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'N??o tem mais nada mais satisfat??rio do que ter o bom e barato em sua casa.Com os planos da Access Golden Telecom eu pude escolher um que fosse complemente comp??tivel com meu bolso.Estou muito satisfeito.Vou recomendar para as minhas amigas e familiares.',
    authorName: 'Eliane Carvalho',
    authorPosition: 'Influenciadora Digital',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail size={24} color='#111' />,
    title: 'Alguma D??vida?',
    subtitle: 'Estamos aqui para te ajudar.',
    description: 'Email accessgolden@gmail.com',
  },
  {
    icon: <FiMapPin size={24} color='#d11149' />,
    title: 'Current Location',
    subtitle: 'R. Amaury Ara??jo de Vasconcelos- SN',
    description: 'Tr??s Irm??s, Campina Grande - PB',
    description2: 'Campina Grande - PB, 58424-715',
  },
  {
    icon: <BsTelephoneInbound size={24} color='#440eb8' />,
    title: 'Contato',
    subtitle: '(83) 2148 - 6920',
    description: '(83) 98612 - 4287',
  },
];









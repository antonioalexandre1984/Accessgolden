module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Inter',
         body: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#a5ffce',
          200: '#4ae290',
          300: '25c870',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
        page: '#fcfcff',
        logo: {
          100: '#fbb13c',
        },
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
      
      backgroundImage: {
        banner: "url('./assets/img/banner/about.png')",
        faq: "url('./assets/img/faq/bg2.png')",
        banner: "url('./assets/img/banner/bg2.jpg')",
        plan: "url('./assets/img/plan/bg.png')",
        benefit: "url('./assets/img/benefit/bg.jpg')",
        benefitLogo: "url('./assets/img/benefit/bg.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '140%',
      },
    },
  },
  plugins: [],
};

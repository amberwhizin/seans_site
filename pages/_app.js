import { useRouter } from 'next/router';
import MusicHeader from '../components/MusicHeader';
import TutoringHeader from '../components/TutoringHeader';
import Footer from '../components/Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useYaml, useIsTabletOrMobile } from '../hooks';
import './_app.css';

/* color: ${(props) => props.theme.colors.oliveDrab7}; */
const musicFont = `'Bangers', cursive;`;
const tutoringFont = `'Merienda', sans-serif`;
/* If the urls says music, use the music font, otherwise use the tutoring font */
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  * {
      box-sizing: border-box;
      font-family: ${(props) => {
        if (props.isMusic) {
          return musicFont;
        }
        if (props.isTutoring) {
          return tutoringFont;
        }
      }};

  }
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    background: cover;
    height: 100vh;
    width: 100%;

  }
  h1 {
    font-size: 3rem;
    margin: 10px;
    @media (max-width: 1438px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  /* Button reset credit https://css-tricks.com/overriding-default-button-styles/ */
  button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: transparent;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
      background: transparent;
  }

  button:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
  }

  button:active {
      transform: scale(0.99);
  }
`;

const theme = {
  colors: {
    oliveDrab7: '#3d3522ff',
    oliveDrab72: '#4a442dff',
    hunterGreen: '#386150ff',
    keppel: '#58b09cff',
    aeroBlue: '#caf7e2ff',
    operaMauve: '#b48eAe',
    lightGrey: '#D7D9D7',
    nickel: '#646E68',
    peachPuff: '#F5D6BA',
    white: '#ffff',
    floralWhite: '##FFFAF0',
    aliceBlue: '##F0F8FF',
    sapphireBlue: '#1768AC',
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const copy = useYaml();
  const isTabletOrMobile = useIsTabletOrMobile();
  const currentApp = router.pathname.split('/')[1]; // router.pathname is '/', so at the first sign of pattern '/', look at the pathname at index [1]
  const isMusic = currentApp === 'music';
  // if its music...
  const isTutoring = currentApp === 'tutoring';
  // if its tutoring...
  return (
    <>
      <GlobalStyle theme={theme} isMusic={isMusic} isTutoring={isTutoring} />
      <ThemeProvider theme={theme}>
        {isMusic && <MusicHeader copy={copy} />}
        {/* show /music/ */}
        {isTutoring && <TutoringHeader copy={copy} />}
        {/* show /tutoring */}
        {/* otherwise nothing */}
        <Component copy={copy} {...pageProps} />
        {/* {!isTabletOrMobile && <Footer copy={copy} />} */}
      </ThemeProvider>
    </>
  );
}

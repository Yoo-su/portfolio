import type { AppProps } from 'next/app'
import {createGlobalStyle} from "styled-components";
import '../styles/app.css'

const GlobalStyle=createGlobalStyle`
  body{
    margin:0;
  }

  main{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle />
  <Component {...pageProps} />
  </>
  );
}
export default MyApp

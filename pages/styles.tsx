import {createGlobalStyle} from "styled-components";

export const GlobalStyle=createGlobalStyle`
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
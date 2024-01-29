import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
}

img{
  width: 100%;
}

body{
  font-family: "poppins" ,sans-serif;
  min-width: 100vh;
  color: #FFFFFF;
  background-color:#050214 ;
}
`;

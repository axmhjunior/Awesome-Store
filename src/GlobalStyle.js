import {  createGlobalStyle, styled  } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  body{
    height: 100vh;
  }
`;

export const Button = styled.button`
        
        border: 1px solid #000;
        background-color: #fff;
        padding:5px;
        color:#000;
        cursor:pointer;

    
      &:hover {
        color: #fff;
        background-color:#000;
    }
`;

export default GlobalStyle;
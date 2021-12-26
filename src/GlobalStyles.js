import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,*::after, *::before{
      box-sizing: border-box;
      margin: 0;
      padding:0;
  }

  html, body , #root{
    height: 100%;
  }

  body{
      // padding-top: ${({ theme }) => theme.distance.labelMargin};

      background: radial-gradient(circle at 50% 20%,  ${({ theme }) =>
        ` ${theme.color.background.from} 10%, ${theme.color.background.to}`});
        font-family: 'Barlow Semi Condensed', sans-serif;

  }

  p, button{
    font-family: 'Barlow Semi Condensed', sans-serif;

  }
`;

export default GlobalStyles;

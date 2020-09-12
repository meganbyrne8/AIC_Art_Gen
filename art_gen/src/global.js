import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    display: flex;
    justify-content: center;
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }
`;

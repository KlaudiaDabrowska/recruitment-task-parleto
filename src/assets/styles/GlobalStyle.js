import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');

    *{ 
        box-sizing: border-box;
    }

    body, a, button {
        font-family: 'Roboto', sans-serif;
    }

    html{
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
    
    :root {
        font-size:16px;
    }

`;

import { createGlobalStyle } from 'styled-components';
import bgImgHomeDesktop from '../assets/home/background-home-desktop.jpg';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};

* {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
};

body { 
    box-sizing: inherit;
    color: #FFFFFF;
    background-image: url(${bgImgHomeDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`;

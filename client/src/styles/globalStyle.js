import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import bgImgHomeDesktop from '../assets/home/background-home-desktop.jpg';

export const GlobalStyle = createGlobalStyle`
${normalize};

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

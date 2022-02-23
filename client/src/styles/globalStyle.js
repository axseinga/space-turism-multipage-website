import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import bgImgHomeDesktop from '../assets/home/background-home-desktop.jpg';

export const GlobalStyle = createGlobalStyle`
${normalize};

html {
    font-size: 62.5%;
};

body { 
    color: #FFFFFF;
    background-image: url(${bgImgHomeDesktop});
    background-size: cover;
    background-repeat: no-repeat;
}
`;

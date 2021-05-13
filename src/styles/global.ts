import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
    --bug: #729f3f;
    --dragon: #29a7a7;
    --fairy: #fdb9e9;
    --fire: #fd7d24;
    --ghost: #7c62a3;
    --ground: #f5deb3;
    --normal: #a4acaf;
    --psychic: #f366b9;
    --steel: #9eb7b8;
    --dark: #171717;
    --electric: #eed535;
    --fighting: #d56723;
    --flying: #7b68ee;
    --grass: #b0e85b;
    --ice: #51c4e7;
    --poison: #b97fc9;
    --rock: #a38c21;
    --water: #239cec;

    --text-primary: #4d4b46;
    --text-secondary: #a1a1a1;
    --text-third: #4b0082;
    --background-primary: #e5e5e5
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;

    }

    html, body, div#__next {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        background-color: var(--background-primary);
    }

    img{
        width: 100%;
        height: 100%;
        max-width: 900px;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    overflow-y: scroll;
    scrollbar-gutter: stable;
}
html,
    body,
    #root {
    min-height: 100vh;
    font-family: "Roboto", sans-serif;
}
html,
body {
    overflow-x: clip;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:#050817;
    color: #ffffff;
    line-height: 1.5;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#root {
    display: flex;
    flex-direction: column;
}

img,
    picture,
    video,
    canvas,
    svg {
    display: block;
    max-width: 100%;
}

input,
    button,
    textarea,
    select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
    color: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}


ul,
ol {
    list-style: none;
}

/* Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: #7c5cff #0b1020;
}

/* Chrome, Edge, Safari */
*::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

*::-webkit-scrollbar-track {
    background: #0b1020;
}

*::-webkit-scrollbar-thumb {
    background: linear-gradient(
            180deg,
            #8b5cf6,
            #6b4eff
    );

    border-radius: 999px;

    border: 2px solid #0b1020;
}

*::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
            180deg,
            #9b6cff,
            #7c5cff
    );
}

*::-webkit-scrollbar-corner {
    background: #0b1020;
}
`;
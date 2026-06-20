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

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: linear-gradient(180deg, #020617 0%, #0f172a 100%);
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
`;
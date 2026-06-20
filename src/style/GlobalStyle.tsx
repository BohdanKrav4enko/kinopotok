```jsx id="global-style"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #0f172a;
    color: #ffffff;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

#root {
    min-height: 100vh;
}
`;

export default GlobalStyle;
```

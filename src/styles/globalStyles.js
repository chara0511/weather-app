import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import FontFaces from "./fonts";
import TransitionStyles from "./transitionStyles";
const { colors, fontSizes, fonts } = theme;

const GlobalStyles = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.background};
    color: ${colors.white};
    line-height: 1.3;
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.lg};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    /* color: ${colors.grayish}; */
    margin: 0 0;
  }

  h3 {
    color: ${colors.lightGrey};
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.green};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    font-family: ${fonts.Raleway};
    transition: ${theme.transition};
    font-weight: 600;
    font-size: ${fontSizes.md};

    &:focus,
    &:active {
      outline-color: ${colors.white};
    }
  }

  input, textarea {
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-family: ${fonts.Raleway};
    line-height: 19px;
    font-size: ${fontSizes.md};
    font-weight: 500;
    outline: 0;
    margin: 0;

    &:focus {
      outline: 0;
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p, 
  span {
    margin: 0 0;
    color: ${colors.grey};
  }

  ul {
    font-size: ${fontSizes.md};
    font-style: normal;
    font-weight: 500; 
    line-height: 19px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;
      position: relative;
    }
  }

  ${TransitionStyles};

`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eeeeee',
  black: '#111',
  gray: '#333',
  green: '#10ac84',
  lightGray: `#a3a3a3`
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media ( max-width: ${breakpoints.desktop} ){
      max-width: 85%;
    }
  }
`

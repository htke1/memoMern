import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`
body{
background: ${({theme})=theme.body},
text: ${({theme})=theme.text}
}
`;
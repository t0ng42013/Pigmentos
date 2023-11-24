import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
color: #fafafa;
}

body{
background-color: #15151e;
}

button{
    background: none;
    border: 0;
    padding: .5rem ;
}

img{
    max-width: 100%;
}

header,
main,
footer{
    max-width: 1220px;
    margin: auto;
}

.Featured{
    text-align: center;
    margin: 30px;
    font-size: 2rem;
}
`;
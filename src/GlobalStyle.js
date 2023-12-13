import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
text-decoration: none;
overflow-x: hidden;
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

.btn{
    padding: .5rem 1.25rem;
    border: 1px solid rgb(43 43 59);
    border-radius: 99999px;
    color: white;
    cursor: pointer;
    width: 100%;
    z-index: 10;
    line-height: inherit;
}

.logo{
    max-width: 90px; 
    margin-right: 2rem;

}
`;
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2? family= Albert+Sans:ital,wght@1,300 & family= Montserrat:wght@300;400;600;700;800 & display= intercambio');

*{
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
text-decoration: none;
font-family: 'Albert Sans', sans-serif;
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
    max-width: 1550px;
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
.overlay {
  display: none; /* Por defecto, oculto */
  /* Estilos para el overlay, por ejemplo: */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Color oscuro semitransparente */
  z-index: 150; /* Asegura que esté por encima de otros elementos */
}

.overlay.active {
  display: block; /* Mostrar cuando está activo */
}

.input-error  {
  border: 2px solid red !important ; /* Borde rojo para el input */
  color: red; /* Texto rojo para el texto del input */
}

.error-message {
  color: red; 
  margin-top: 5px;
}
@media (max-width: 580px) {
   .swal2-popup {
    width: 80% !important; /* Cambia el ancho del modal */
    min-width: 320px;
  }  
}
 
`;
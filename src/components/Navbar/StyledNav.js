import styled from 'styled-components';

export const Nav = styled.nav`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  1.5rem .75rem;
  position: relative;
  z-index: 50;

 a{
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 110px;
      overflow: hidden;
      margin-right: 25px;
    }

    a {
    }
  }

`;
export const MenuDesktop = styled.div`
  margin: auto;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {

      display: flex;
    
  }
`;


export const MenuDesktopLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1;
  z-index: 10;
    li {
       padding: 0.1rem 1.25rem;
       a {
         color: #fafafa;
        font-size: 1.1rem;
        }
    }
`;

export const MenuDesktopLinksBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    border-radius: 999px;
    color: white;
    padding: 0.5rem 1.25rem;
    font-size: 1.2rem;
    cursor: pointer;
    border: 1px solid #2b2b3b;
  }
`;

export const Cart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  svg{
    margin: auto;
  }
  span {   
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size : 1rem;
    border-radius: 50%;
    text-align: center;
    background-color: #279fff;
    position: absolute;
    right: -10px;
    top: -10px;    
  }
`;

export const MenuMobile = styled.div`
  background-color: #104110;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: -200vw;
  top: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 45px;
  z-index: 10;
  border: solid red;
  transition: all 3s ease-in;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    line-height: 2.5rem;
    li a {
      color: white;
    }
  }

  .active {
    position: relative;
    transform: translateX(200vw);

    top: 0;
    display: flex;
    transition: all 3s ease-in;
  }
`;

export const MenuMobileBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  line-height: 2.54rem;
  width: 100%;

  .btnStart {
    background: linear-gradient(
      90deg,
      #279fff 7.81%,
      #663aff 52.18%,
      #f54aba 98.44%
    );
  }
`;
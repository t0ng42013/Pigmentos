import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: visible;
  cursor: pointer;

  @media (min-width: 768px){
    display: none;
  }
`;

export const BurgerBtn = styled.div`
 font-size: 2rem ;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: 700;

  @media (min-width: 768px) {
    display: none;
  }

  .bgOverlay.is-active {
    background-color: #222;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s linear;

    & {
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s linear;
    }
  }
`;
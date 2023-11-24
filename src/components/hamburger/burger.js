import styled from 'styled-components';

export const BurgerBtn = styled.div`
  .three {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #ecf0f1;
    text-align: center;
  }

  .col {
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
  }

  .col:first-of-type {
    margin-left: 0;
    position: relative;
    z-index: 2;
  }

  .line {
    width: 35px;
    height: 4px;
    background-color: #ecf0f1;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  /* ONE */

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }

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
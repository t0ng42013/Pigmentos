import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.75rem;
  position: relative;
  z-index: 50;
  overflow: visible;

  a {
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
  overflow: visible;
 

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
  overflow: visible;

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
  overflow: visible;
  position: relative;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #279fff;
  }
  svg {
    margin: auto;
    width: 30px;
    height: 30px;
  }
  span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 50%;
    text-align: center;
    background-color: #279fff;
    position: absolute;
    right: -10px;
    top: -10px;
  }

  @media (min-width: 1024px) {
    width: 100px;
  }
`;

export const MenuMobile = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: -100vw;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 45px;
  z-index: 10;

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

  &.active {
    position: relative;
    transform: translateX(100vw);
    top: 0px;
    display: flex;
    transition: all 0.4s ease-in;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const MenuMobileBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  line-height: 2.54rem;
  width: 100%;
  text-align: center;

  .btnStart {
    background: linear-gradient(
      90deg,
      #279fff 7.81%,
      #663aff 52.18%,
      #f54aba 98.44%
    );
  }
`;

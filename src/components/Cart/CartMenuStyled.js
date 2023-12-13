import styled from "styled-components";

export const CartContainer = styled.div`
  width: 35%;
  height: 100vh;
  margin-left: auto;
  background-color: #222;
  opacity: 0.9;
  position: absolute;
  top: 80px;
  right: ${({ isOpen }) =>
    isOpen
      ? "0"
      : "-2000px"}; /* Cambia la posición dependiendo del estado */ /* Cambia la posición dependiendo del estado */
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    margin-top: 40px;
    margin-bottom: 16px;
    width: 90%;
  }

  ul {
    width: 100%;
  }
`;

export const CartBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  padding:0 8px;
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const CartItem = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  border: solid;
  width: 100%;
  gap: 8px;
  width: 100%;

  img {
    object-fit: cover;
    width: 3rem;
    max-width: 3rem;
    height: auto;
    display: block;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    line-height: 1.25rem;
  }
  svg {
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: 10px;
  }
`;

export const CartBtnBuy = styled.button`
  padding: 8px 32px;
  margin: 16px 0;
  background: gray;

  &:hover{
    color: black;
    background: #fff;
    transition: all .3s;
  }
`;


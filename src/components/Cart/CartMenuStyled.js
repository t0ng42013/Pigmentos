import styled from "styled-components";

export const CartContainer = styled.div`
  width: 220px;
  height: 100vh;
  margin-left: auto;
  background-color: #222;
  opacity: 1;
  position: absolute;
  top: 80px;
  right: ${({ isOpen }) =>
    isOpen
      ? "0"
      : "-100%"}; /* Cambia la posición dependiendo del estado */ /* Cambia la posición dependiendo del estado */
  z-index: 300;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
@media (min-width: 600px) {
  width: 400px;
}
  hr {
    margin-top: 40px;
    margin-bottom: 16px;
    width: 90%;
  }

  ul {
    width: 100%;
    .cartVacio{
      text-align: center;
      margin-top: 2.5rem;
      font-size: 20px;

      span{
        display: block;
        margin: 20px;
        font-size: 40px;
      }
    }
  }

  li{
    margin-bottom: 10px;
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
    cursor: pointer;
  }
`;

export const CartBtnBuy = styled.button`
  padding: 8px 25px;
  margin: 16px 4px;
  background: gray;

  &:hover {
    color: black;
    background: #fff;
    transition: all 0.3s;
  }
`;

export const CartCleanBtn = styled(CartBtnBuy)`
  color: orange;
  background-color: black;
  font-weight: bold;
`;
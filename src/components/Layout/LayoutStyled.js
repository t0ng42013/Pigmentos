import styled from 'styled-components';

export const LayoutContainer = styled.main`
  width: 100%;
  height:  ${({ isMenuOpen, isCartOpen }) =>
    isMenuOpen || isCartOpen ? "80vh" : "auto"};
  overflow-y: ${({ isMenuOpen, isCartOpen }) =>
    isMenuOpen || isCartOpen ? "hidden" : "auto"};
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center; */
`;
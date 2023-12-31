import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 2rem;
  margin: auto;
  padding: 2.5rem 0.75rem 0;

  a > img {
    max-width: 140px;
  }

  p{
   
    font-size: 1.1rem;
    line-height: 32px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .footDeco{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const FootContainerRedes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a > span{
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: gray;
    font-size: 1.2em;
    margin-left: 5px;
    &:hover {
    background-color: blue;
    }
  }
`;

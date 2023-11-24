import styled from 'styled-components';

export const CardContainer = styled.a`
  display: block;
  background: #2b2b3b;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  max-width: 370px;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    margin: auto;
    display: block;
    height: auto;
    object-fit: cover;
  }
`;

export const CardType = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 10px;

  div {
    background: #3c70fe;
    font-weight: bold;
    width: 3rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
  }
`;

export const CardBody = styled.figcaption`
  padding: 1.25rem;
  color: white;
`;

export const CardBodyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
  }
`;

export const CardBodyParagraph = styled.p`
  line-height: 22px;
  font-size: 12px;
  padding-top: 1.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
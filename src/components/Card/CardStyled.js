import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 365px;
  justify-content: space-between;
  text-align: center;
  padding: 15px 13px;
  margin-left: 0;
  font-size: 0.875em;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.25s ease 0s;
  min-width: 230px;

  position: relative;
  width: 50%;
  min-height: 1px;
  box-shadow: inset 0 0 0 1px #444;
  border: 2px solid transparent;

  .pictures {
    max-height: 50%;
    max-width: 100%;
    object-fit: cover;
    display: inline-flex;
    margin: auto;
    margin-bottom: 20px;
  }

  h2 {
    padding-top: 20px;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 0.161em;
    font-weight: 500;
    font-style: normal;
  }

  @media (min-width: 780px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 10px;
  ins span {
    color: orange;
    font-size: 17px;
    margin-right: 10px;
  }

  del {
    text-decoration: line-through;
    color: #aaa;
  }
`;
export const Amount = styled.span`
  img {
    width: 22px;
    margin-right: 5px;
  }
`;
import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media(min-width: 992px){
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProductContainerImage = styled.div`
width: 100%;
height: auto;
object-fit: cover;

  @media (min-width: 992px) {
    display: flex;
    width: 50%;
  }
`;

export const ContainerImage = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (min-width: 992px) {
    order: 2;
  }
`;

export const ContainerImageExample = styled.figure`
  width: 50%;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: solid orange 1px;
  }
  @media (min-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ProductContainerInfo = styled.div`
  .titleCardInfo {
    display: block;
    width: 100%;
    padding-bottom: 0.87em;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 1.875em;

    h1 {
      font-size: 1.438rem;
      color: #444;
      font-weight: 500;
      margin-right: 40px;
    }
  }

  .code {
    text-align: center;
    padding-bottom: 26px;
    margin-bottom: 26px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 50px;
    color: #3b3b3b;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: 50%;
  }
`;

export const ProductCardContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 270px;
  border-radius: 10px;
  border: 1px solid #ff8203;
  margin-bottom: 10px;

  p {
    font-size: 17px;
  }

  h2 {
    font-size: 30px;
    line-height: 48px;
    font-weight: 500;
    color: #ff8203;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  span {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    width: 100%;
    margin: -1.3em 0 0.8em;
    color: #777;
    display: inline-block;
    margin-bottom: 15px;
  }

  div > label {
    font-size: 16px;
    line-height: 26px;
    columns: #777;
    margin-right: 5px;
  }

  div > input {
    line-height: 1.6;
    padding: 9px;
    padding-left: 20px;
    width: 70px;
    color: black;
  }

  button {
    padding: 13px 22px !important;
    margin-bottom: 20px;
    margin-top: 20px;
    background: transparent;
    border: 1px solid #ff8203;
    width: 100%;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const ProductContainerDescription = styled.div`
  h4 {
    font-size: 1.41575em;
    font-weight: 500;
    clear: both;
    margin: 0 0 0.5407911001em;
    color: #fafafa;
    display: block;
    width: 100%;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    word-wrap: break-word;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;
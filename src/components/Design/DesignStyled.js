import styled from 'styled-components';

export const DesignContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  margin: auto;
  margin-bottom: 60px;
  padding: 2.5rem 0.75rem 0;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    color: rgb(191 191 203);
    line-height: 1.75rem;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    padding: 1.25rem;
  }

  @media (min-width: 640px) {
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
    h2 {
      width: 100%;
      margin-bottom: 3rem;
    }
    p {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    figure {
      width: 60%;
      max-width: 500px;
    }
  }
`;
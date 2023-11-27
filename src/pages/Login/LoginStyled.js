import styled from 'styled-components';

export const LoginComponent = styled.section`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 60px;
  border: solid 1px #eee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;

  img {
    border-radius: 50%;
  }

  h2 {
    line-height: 36px;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  p {
    line-height: 22px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    max-width: 352px;
    margin-top: 0.4rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 3.5rem;
    gap: 0.5rem;
    border-radius: 10px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: rgb(60 60 76);
    color: white;
  }
`;

export const TermsConditions = styled.div`
  display: flex;
  background: transparent;
  padding: 0;
  gap: 5px;

  a {
    display: flex;
    background: transparent;
    padding: 0;
    color: rgb(60 112 254);
  }
`;
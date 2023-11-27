import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  align-items: center;
  margin: 0 20px;
  padding: 1rem;
  border: solid black;
  background: rgb(38 38 49);
  border-radius: 22px;
  border: 1px solid rgb(2 108 250);
  margin-bottom: 2rem;

  @media (min-width: 768px) {    
      padding: 40px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: center;
    
  }

  
  .underLine {
    background-color: rgb(60 112 254);
    border-radius: 4px;
    width: 48px;
    height: 3px;
    border: none;
    border-top-width: 1px;
    margin-top: 1rem;
  }

   @media (min-width: 768px) {
    margin: 2rem;
   }
`;


export const InfoContainer = styled.div`
  
  h2 {
    color: white;
    font-size: 2rem;
  }

  p {
    color: silver;
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.1rem;
    max-width: 400px;
    line-height: 1.7rem;
  }
`;

export const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;

    svg {
      font-size: 1.5rem;
      margin-right: auto.5rem;
      fill: orange;
    }
  }

  @media (min-width: 768px) {
    .contactInfo {
      flex-direction: row;
    }
  }
`;

export const InfoFigure = styled.figure`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 2.5rem;
 
  img {
    max-width: 277px;
    height: auto;
    object-fit: cover;
  }
  
  @media (min-width: 768px) {
    .contact figure {
      flex-direction: row;
      align-items: flex-end;
    }
  }

`;

export const RedesContainer = styled.div`
  display: flex;
  gap: 10px;

  div {
    width: 20px;
    height: 20px;
    background-color: gray;
    border-radius: 50%;
  }
`;

export const FormContainer = styled.div`
  background: #101011;
  color: aliceblue;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  .formBody p {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    .form {
      padding: 30px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;

  div p {
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.25rem;
    margin-top: 1.25rem;
  }

  input,
  textarea {
    background: transparent;
    width: 100%;
    border: 0.5px solid #4d4d4d33;
    border-radius: 8px;
    margin-top: 10px;

    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  button {
    width: 100%;
    font-weight: 600;
    font-size: 0.8rem;
    color: white;
    line-height: 1.25rem;
    padding: 20px;
    border-radius: 12px;
    background-color: #026cfa;
    border: none;
    margin-top: 20px;
  }
`;
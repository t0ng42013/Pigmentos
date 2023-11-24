import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 0 15px;
  background: rgb(38 38 49);
  border-radius: 22px;
  margin-bottom: 40px;

  .info {
    padding: 0 5px;
    
    h2 {
      color: white;
      font-size: 2rem;
    }
    p {
      color: silver;
    }
  }

  figure {
    margin-left: 0;
  }
  img {
    max-width: 80%;
    height: auto;
    object-fit: cover;
  }

  .secRedes {
    display: flex;
    gap: 10px;
  }
  .secRedes div {
    width: 20px;
    height: 20px;
    background-color: gray;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .form {
    background: #000;
    color: aliceblue;
    width: 100%;
    border-radius: 22px;
    margin-bottom: 20px;
  }

  .formCon {
    padding: 10px 20px;
  }

  form input {
    background: transparent;
    border: 0.5px solid gray;
    border-radius: 8px;
    padding: 10px;
  }

  form button {
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    background-color: skyblue;
    border: none;
    margin: 20px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
   
    .info {
    padding: 0 5px;
    padding:20px ;
    h2 {
      margin: 20px;
      text-align: center;
    }
    p{
        margin: 20px;
    }
}
.secRedes {
    justify-content: end;
    align-items: center;
    gap: 20px;
    margin: auto;
}
  }
`;

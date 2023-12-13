import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 0 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 440px;

  @media (min-width: 768px) {
    max-width: 640px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    margin-top: 2.5rem;
  }
`;

export const AboutBgImage = styled.section`
  width: 100%;
  height: calc(186px + 156px);
  position: relative;
  z-index: 10;

  figure {
    max-width: 320px;
    height: 203px;
    width: 100%;
    box-shadow: 40px 60px 0px 0px #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    height: calc(329px + 156px);

    figure {
      height: 100%;
      max-width: 459px;
      max-height: 339px;
      box-shadow: 80px 80px 0px 0px #fff;
    }
  }

  @media (min-width: 1024px) {
    height: 420px;

    figure {
      box-shadow: 300px 80px 0px 0px #fff;
    }
  }
`;

export const AboutBodyInfo = styled.section`
  width: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 25px;
  position: relative;
  top: -180px;

  figure {
    width: 245px;
    height: 336px;
    position: relative;
    overflow: visible;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    top: -200px;

    figure {
      width: 302px;
      height: 464px;
    }
  }

  @media (min-width: 1024px) {
    top: -250px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    padding: 0;
    margin-top: 5rem;
  }
`;

export const AboutTeam = styled.div`
  font-size: 14px;
  line-height: 1.8rem;
  p {
    width: 70%;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 58%;
    font-size: 16px;
    line-height: 2rem;
    p {
      width: 70%;
    }
  }
`;
export const AboutUs = styled.div`
  h1 {
    margin: 20px 0;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-size: 18px;
  }
  h4 {
    line-height: 2rem;
    width: 80%;
    font-size: 20px;
    font-weight: 200;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    width: 70%;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    h1 {
      margin: 20px 0;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-size: 2rem;
    }

     h4 {
      line-height: 2.1rem;
      width: 95%;
      font-size: 20px;
      font-weight: 200;
      margin-bottom: 30px;
      letter-spacing: 0.5rem;
    }

     p {
      font-size: 18px;
      width: 90%;
      line-height: 2rem;
    }
  }
`;

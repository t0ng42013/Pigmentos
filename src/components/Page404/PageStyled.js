import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;

  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
  }

  h2 {
    font-family: montserrat, sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: #232323;
  }

  p {
    font-family: montserrat, sans-serif;
    color: #787878;
    font-weight: 300;
    margin: 1rem 0;
  }

  .custom-link {
    font-family: montserrat, sans-serif;
    display: inline-block;
    padding: 12px 30px;
    font-weight: 700;
    background-color: #f99827;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
`;

export const NotFound404 = styled.div`
  height: 190px;

  h1 {
    font-family: montserrat, sans-serif;
    font-size: 146px;
    font-weight: 700;
    margin: 0;
    color: #232323;
  }
  span {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: url(/emoji.webp);
    background-size: cover;
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    z-index: -1;
  }
`;
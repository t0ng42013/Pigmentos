import styled from 'styled-components';

export const FeaturedContainer = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1170px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;

  .featuredCardContainer {
    margin-top: 80px;
  }

  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
`;

export const FeaturedCard = styled.div`
  position: relative;
  max-width: 340px;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: block;

  .featured {
    width: 100%;
    background-color: black;
    margin: 10px auto;
    display: block;
    overflow: hidden;
    height: 400px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 0.75);

    &:hover > .featuredImg {
      margin-top: -100px;
    }
    &:hover > div > .featuredSocialLink ul li {
      bottom: 220px;
    }

    .featuredImg {
      background-color: #fff;
      height: 400px;
      width: 100%;
      transition: 0.5s;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    }
  }
  &:hover > .featuredSocialLink ul li {
    bottom: 220px;
  }
`;

export const FeaturedDetails = styled.div`

  .featuredName {
    color: #fff;
    font-weight: bold;
    padding: 5px;
    h1 {
      font-size: 30px;
      text-align: center;
    }
    span {
      font-size: 20px;
      color: yellow;
      padding: 0px;
    }
  }

  .featuredSocialLink {
    ul {
      display: block;
      text-align: center;
      list-style: none;
      margin-top: 0;
      margin-bottom: 1rem;
      overflow-x: visible;

      li {
        position: relative;
        bottom: -120px;
        display: inline-block;
        margin: 7px;
        background-color: #000;
        padding: 10px;
        border-radius: 50%;
        line-height: 0.1;
        margin-left: -5px;
        &:nth-child(1) {
          transition: 1s;
        }
        &:nth-child(2) {
          transition: 1.3s;
        }
        &:nth-child(3) {
          transition: 1.6s;
        }
        svg {
          font-size: 15px;
          color: #fff;
          animation-name: rotate-icon;
        }
      }
    }
  }
`;
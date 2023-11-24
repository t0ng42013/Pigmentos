import styled from 'styled-components';

export const Nav = styled.nav`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  1.5rem .75rem;

  h2 {
    color: white;
    font-weight: bold;

    img {
      width: 110px;
      overflow: hidden;
      margin-right: 25px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    color: white;
    margin-left: 1rem;
  }

  .links {
    position: absolute;
    top: -700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: white;
      font-size: 2rem;
      display: block;
      margin: 20px;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.2rem;
        display: inline;
        color: white;
        &:hover{
          color: orange;
          transition: all .3s;
        }
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2;
    a {
      color: white;
    }

    a:hover{
      color: orange;
    }
  }
`;

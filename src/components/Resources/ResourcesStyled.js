import styled from 'styled-components';

export const ResourcesContainer = styled.div`
  position: relative;
  background: #15151e;
  color: white;
`;

export const AllResources = styled.div`
  position: relative;
  max-width: 1170px;
  margin: auto;
  padding: 2.5rem 0.75rem;

  @media (min-width: 768px) {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  @media (min-width: 1024px) {
    padding-bottom: 90px;
    padding-top: 5rem;
  }

  @media (min-width: 1280px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ResourcesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

export const ResoursesOptions = styled.div`
  margin-top: 2.5rem;
`;

export const ResourcesButtons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;

  li {
    text-align: center;
    cursor: pointer;
  }

  button {
    color: white;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 500;
    
    @media (min-width: 400px){
font-size: 1.3rem;
    }
    height: 40px;
    border-radius: 9999px;
    border: 2px solid #3c3c4c;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover {
      color: #fe993c;
      border: 2px solid #fe993c;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 2.5rem;
  place-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;


export const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    width: 244px;
    height: 56px;
    border-radius: 0.3rem;
    background: #307fe2;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    cursor: pointer;
  }
`;
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



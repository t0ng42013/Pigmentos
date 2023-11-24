import styled from 'styled-components';

export const ServicesStyled = styled.section`
  position: relative;
  max-width: 1170px;
  margin: auto;
  padding: 2.5rem 0.75rem 0;
  color: white;
`;

export const CardServiceContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  text-align: center;

  @media (min-width: 768px) {    
      grid-template-columns: repeat(2, minmax(0, 1fr));    
  }
  @media (min-width: 1024px) {   
      grid-template-columns: repeat(4, minmax(0, 1fr));    
  }
`;

export const CardServiceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 0.5rem;
`;

export const IconContainerStyled = styled.div`
 
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


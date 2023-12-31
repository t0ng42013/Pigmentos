import styled from 'styled-components';

export const CategoriesContainer = styled.section`

  
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding: 20px;
  @media (min-width: 768px) {
   gap: 50px;
  }

`;


export const CardCategories = styled.img`

width: 120px;
height: 120px;
border-radius: 50%;
border: solid;

@media (min-width: 768px) {
    width: 150px;
    height: 150px;
}
`;
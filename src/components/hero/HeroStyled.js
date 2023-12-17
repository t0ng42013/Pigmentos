import styled from 'styled-components';


export const HeroContainer = styled.section`
 position: relative;
  width: 100%;
  background: #15151e;
  max-width: 1170px;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroFigure = styled.figure`
position: absolute;
bottom: 0;
object-fit: cover;

img,video{
    max-width: 100%;
    height: auto;
    display: block;
}
`;

export const HeroImageR = styled(HeroFigure)`
left: 0;
`;
export const HeroImageB = styled(HeroFigure)`
right: 0;
`;

export const HeroHeader = styled.header`
  padding: 2.5rem 0.75rem 1.5rem;
  margin: auto;
  position: relative;
  color: white;
`;

export const HeroTitle = styled.h2`
  line-height: 2.5rem;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  max-width: 700px;
  margin: auto;
`;

export const HeroParagraph = styled.p`
  color: rgb(191 191 203);
  line-height: 1.75rem;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  padding-top: 1.25rem;
`;

export const HeroForm = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: auto;
`;
export const HeroInput = styled.input`
  margin-top: 1.25rem;
  color: rgb(21 21 30);
  padding: 1rem;
  background: white;
  border-style: none;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 100%;
`;

export const HeroButton = styled.button`
  margin-top: 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: rgb(60 112 254);
  cursor: pointer;

  a{
    color: white;
    font-size: 1.2rem;
    
  }

`;
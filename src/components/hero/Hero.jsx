import { HeroButton, HeroContainer, HeroForm, HeroHeader, HeroImageB, HeroImageR, HeroInput, HeroParagraph, HeroTitle } from "./HeroStyled";


import { FaSearch } from "react-icons/fa";



export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageR>
        <img src="/assets/imgBgBlurRed.svg" alt="" />
      </HeroImageR>
      <HeroImageB>
        <img src="/assets/imgBgBlurBlue.png" alt="" />
      </HeroImageB>
      <HeroHeader>
        <HeroTitle>Explorar Todos Los Recursos</HeroTitle>
        <HeroParagraph>
          Los mejores recursos de diseño del mundo en un solo lugar
        </HeroParagraph>
        <HeroForm>
          <HeroInput
            // value={state}
            type="search"
            name=""
            id=""
            placeholder="Search by anything"
          />
          <HeroButton>
            <a href="/#">
              <FaSearch />
            </a>
          </HeroButton>
        </HeroForm>
      </HeroHeader>
    </HeroContainer>
  );
}

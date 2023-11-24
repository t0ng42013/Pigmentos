import { HeroButton, HeroContainer, HeroForm, HeroHeader, HeroImageB, HeroImageR, HeroInput, HeroParagraph, HeroTitle } from "./HeroStyled";

import fondo1 from "/src/assets/imgBgBlurRed.svg";
import fondo2 from "/src/assets/imgBgBlurBlue.png";

import { FaSearch } from "react-icons/fa";



export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageR>
        <img src={fondo1} alt="" />
      </HeroImageR>
      <HeroImageB>
        <img src={fondo2} alt="" />
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

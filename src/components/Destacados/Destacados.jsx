import React from "react";
import { FeaturedContainer } from "./DestacadosStyled";
import { Destacado } from "./Destacado";

export const Destacados = () => {
  return (
    <>
      <FeaturedContainer>
        <div className="featuredCardContainer">
          <div className="row">
            <Destacado />
            <Destacado />
            </div>
        </div>
      </FeaturedContainer>
    </>
  );
};

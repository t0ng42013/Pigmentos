import React from "react";
import { DesignContainer } from "./DesignStyled";

import imgCard from "/src/assets/img3.jpg";

export const Design = () => {
  return (
    <DesignContainer>
      <div>
        <h2>Crea, imprime y recibe la entrega de inmediato</h2>
        <p>
          Importa tus diseños o elige una de nuestras plantillas profesionales,
          personalízala con nuestro sencillo editor y recíbela en tu puerta.
        </p>
        <figure>
          <img src={imgCard} alt="img" />
        </figure>
      </div>
    </DesignContainer>
  );
};

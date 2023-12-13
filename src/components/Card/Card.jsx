import React from "react";
import {
  CardBody,
  CardBodyParagraph,
  CardBodyTitle,
  CardContainer,
  CardType,
} from "./CardStyled";
import { products } from "../../data/Products";

export const Card = () => {
  return (
    
    <>
      {products.map((product) => (
        <CardContainer key={product.id}>
          <figure>
            <img src={`/src/${product.image}`} alt="fotocar2" />
          </figure>
          <CardType>
            <div>
              <p>Pro</p>
            </div>
          </CardType>
          <CardBody>
            <CardBodyTitle>
              <h6>✨📒️📚 Encuadernado de Tesis 📚📒️✨</h6>
            </CardBodyTitle>
            <CardBodyParagraph>
              Imprimimos y encuadernamos tu proyecto final o cualquier
              presentación que necesites, con tapas especiales, totalmente
              personalizadas 📚🤩 Podes optar por encuadernado cosido (como un
              libro 📚) o anillado (como los cuadernos universitarios 📒). Ambos
              formatos tienen el mismo tipo de tapas laminadas, full color y de
              calidad fotográfica 😍🤩
            </CardBodyParagraph>
          </CardBody>
            </CardContainer>
      ))}
      </>
  
  );
};

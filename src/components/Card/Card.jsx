import React from 'react'
import { CardBody, CardBodyParagraph, CardBodyTitle, CardContainer, CardType } from './CardStyled'

// import imgCard from "/src/assets/tesis.jpg";

export const Card = () => {
  return (
    <CardContainer>
      <figure>
        <img src={imgCard} alt="fotocard" />
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
          Imprimimos y encuadernamos tu proyecto final o cualquier presentación
          que necesites, con tapas especiales, totalmente personalizadas 📚🤩
          Podes optar por encuadernado cosido (como un libro 📚) o anillado
          (como los cuadernos universitarios 📒). Ambos formatos tienen el mismo
          tipo de tapas laminadas, full color y de calidad fotográfica 😍🤩
        </CardBodyParagraph>
      </CardBody>
    </CardContainer>
  );
}

import React from "react";
import {
  CardBody,
  CardBodyParagraph,
  CardBodyTitle,
  CardContainer,
  CardType,
} from "./CardStyled";

import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export const Card = ({ product }) => {

const { addToCart } = useCart();

const handleAddToCart = (product) => {
  addToCart(product);
};

  return (
    <CardContainer key={product.id}>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
        <CardType>
          <div onClick={() => handleAddToCart(product)}>
            <p>
              <FaCartPlus />
            </p>
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
  
  );
};

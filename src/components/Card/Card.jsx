import React from "react";
import { Amount, CardContainer, Price } from "./CardStyled";


import { Link } from "react-router-dom";

export const Card = ({ producto }) => {

  return (
    <CardContainer>
      <Link to={`/products/${producto.id}`}>
        <figure>
          <img
            src={producto.image}
            width="224"
            height="197"
            className="pictures"
            alt={producto.name}
          />
        </figure>

        <Price>
          <ins>
            <span>${producto.price - producto.price * 0.1}</span>
          </ins>
          <del>
            <span>$ {producto.price} </span>
          </del>
          <span> </span>
        </Price>

        <Amount>
          <img src="/assets/img/categories/tarjeta.png" alt="card credit" />
          12 x $ {((producto.price + producto.price * 0.25) / 12).toFixed(2)}
        </Amount>

        <h2>{producto.name}</h2>
      </Link>
    </CardContainer>
  );
};

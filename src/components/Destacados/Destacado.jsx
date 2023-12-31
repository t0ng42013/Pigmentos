import React from "react";
import { FeaturedCard, FeaturedDetails } from "./DestacadosStyled";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../../data/Products";

export const Destacado = () => {
 
  const getRandomObject = (product) => {
    const randomIndex = Math.floor(Math.random() * product.length);
    return product[randomIndex];
  };
 
  let productos = getRandomObject(products)
  return (
    <FeaturedCard>
      <Link to={`/products/${productos.id}`}>
        <div className="featured">
          <div className="featuredImg">
            <img src={productos.image} alt="featured-image" />
          </div>
          <FeaturedDetails>
            <div className="featuredName">
              <h1>
                Productos
                <br />
                <span className="featured-role">Destacado</span>
              </h1>
            </div>
            <div className="featuredSocialLink">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/PigmentosDI/photos?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pigmentosdi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </FeaturedDetails>
        </div>
      </Link>
    </FeaturedCard>
  );
};

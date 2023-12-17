import React from "react";
import { FeaturedCard, FeaturedDetails } from "./DestacadosStyled";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export const Destacado = () => {
  return (
    <>
      <FeaturedCard>
        <div className="featured">
          <div className="featuredImg">
            <img
              src="https://instagram.fcor10-3.fna.fbcdn.net/v/t39.30808-6/410247647_958685292396002_171554329259211626_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyIn0&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=AmhXCY75yQYAX-RBIci&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI1ODMwNjQ4MzEzNjg5NDI1Mw%3D%3D.2-ccb7-5&oh=00_AfCFBalOz8CJnPij00ivJtD_bJPc1LzJAfIKeqUREBVPSw&oe=6580EC1C&_nc_sid=ee9879"
              className="img-fluid d-block m-auto"
              alt="featured-image"
            />
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
      </FeaturedCard>
    </>
  );
};

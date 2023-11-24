import React from 'react'
import { FootContainerRedes, FooterStyles } from './FooterStyled'

import logo from "/src/assets/logoPig2.png";
import fondofoot from "/src/assets/imgBgBlurBlue.png";

import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";


export const Footer = () => {
  return (
    <FooterStyles>
      <a href="/ ">
        <img src={logo} alt="logo" />
      </a>
      <FootContainerRedes>
        <a
          href="https://www.facebook.com/PigmentosDI/photos?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaFacebookF />
          </span>
        </a>

        <a
          href="https://www.instagram.com/pigmentosdi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaInstagram />
          </span>
        </a>

        <a href="/" target="_blank" rel="noopener noreferrer">
          <span>
            <FaTwitter />
          </span>
        </a>

        <a href="/" target="_blank" rel="noopener noreferrer">
          <span>
            <FaLinkedin />
          </span>
        </a>
      </FootContainerRedes>

      <p >
        {" "}
        COPYRIGHT 2023, Pigmentos{" "}
      </p>
      <figure className='footDeco'>
        <img src={fondofoot} alt="logo" />
      </figure>
    </FooterStyles>
  );
}

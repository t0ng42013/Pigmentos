import React from 'react'
import { ContactContainer, FormContainer, InfoBody, InfoContainer, InfoFigure, RedesContainer,Form } from './ContactStyled';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import fotoContacto from '/assets/VM1RR0aKaPa38kv6ffcs1687062516.webp';

export const Contact = () => {
  return (
    <ContactContainer>
      <InfoContainer>
        <h2>Contáctenos</h2>
        <p>Complete el formulario y nos comunicaremos con usted dentro de las 24 horas </p>
        <hr className="underLine" />
        <InfoBody>
          <div>
            <FaMailBulk />
            <span>Pigmentos@gmail.com</span>
          </div>
          <div>
            <FaPhone />
            <span>+11122233344</span>
          </div>
        </InfoBody>

        <InfoFigure>
          <img src={fotoContacto} alt="img" />
        </InfoFigure>

        <RedesContainer>
          <div>
            {" "}
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            {" "}
            <FaTwitter />
          </div>
          <div>
            {" "}
            <FaLinkedin />
          </div>
        </RedesContainer>
      </InfoContainer>

      <FormContainer>
        <div className="formBody">
          <p >¿ Que estás buscando ?</p>
          <Form action="">
            <div>
              <p >Full Name</p>
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <p >Email</p>
              <input
                className="w-full focus:outline-none border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px]"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <p >Message</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              // type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      </FormContainer>
    </ContactContainer>
  );
}

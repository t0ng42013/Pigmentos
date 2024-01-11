import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
import Swal from 'sweetalert2';

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Campo requerido"),
    message: Yup.string().trim().max(255,'Maximo de 255 caracteres').required("Campo requerido"),
    email: Yup.string().email('Correo invalido').required('Campo requerido'),
  });

export const Contact = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues:{
      name:'',
      message:'',
      email:'',
    },
    validationSchema,
    onSubmit:(values, { resetForm })=>{
      Swal.fire({
        title: "Mensaje",
        text: "enviado con exito",
        icon: "success",
      });
      resetForm();
     

    },
  });


  return (
    <ContactContainer>
      <InfoContainer>
        <h2>Contáctenos</h2>
        <p>
          Complete el formulario y nos comunicaremos con usted dentro de las 24
          horas{" "}
        </p>
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
          <p>¿ Que estás buscando ?</p>
          <Form action="" onSubmit={handleSubmit}>
            <div className="">
              <p>Nombre</p>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                {...getFieldProps("name")}
                className={touched.name && errors.name ? "input-error" : ""}
              />
              {touched.name && errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>
            <div>
              <p>Email</p>
              <input
                name="email"
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
                className={touched.email && errors.email ? "input-error" : ""}
              />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div>
              <p>Message</p>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                {...getFieldProps("message")}
                className={touched.message && errors.message ? "input-error" : ""}
              ></textarea>
              {touched.message && errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
          </Form> 
        </div>
      </FormContainer>
    </ContactContainer>
  );
}

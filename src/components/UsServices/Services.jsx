import React from 'react'
import { CardServiceContainerStyled, CardServiceStyled, IconContainerStyled, ServicesStyled } from './ServicesStyled'


import { FaCogs, FaRegClock, FaTruck, FaUserCircle } from "react-icons/fa";



export const Services = () => {
  return (
    <ServicesStyled>
      <CardServiceContainerStyled>
        <CardServiceStyled>
          <IconContainerStyled>
            <span>
              <FaUserCircle />
            </span>
          </IconContainerStyled>
          <h3>ASESORAMIENTO</h3>
          <p>Brindamos atención personalizada y seguimiento de tu trabajo.</p>
        </CardServiceStyled>

        <CardServiceStyled>
          <IconContainerStyled>
            <span>
              <FaCogs />
            </span>
          </IconContainerStyled>
          <h3>TECNOLOGIA</h3>
          <p>Brindamos atención personalizada y seguimiento de tu trabajo.</p>
        </CardServiceStyled>

        <CardServiceStyled>
          <IconContainerStyled>
            <span>
              <FaRegClock />
            </span>
          </IconContainerStyled>
          <h3>TRABAJOS EN 24HS</h3>
          <p>
            Realizamos trabajos en 24hs para responder a tus necesidades más
            urgentes.
          </p>
        </CardServiceStyled>

        <CardServiceStyled>
          <IconContainerStyled>
            <span>
              <FaTruck />
            </span>
          </IconContainerStyled>
          <h3>ENVIOS A TODO EL PAIS</h3>
          <p>
            Podés retirar por nuestro local o solicitar envíos a cualquier parte
            del país.
          </p>
        </CardServiceStyled>
      </CardServiceContainerStyled>
    </ServicesStyled>
  );
}

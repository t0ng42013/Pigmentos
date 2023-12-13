import React from 'react'
import { AboutBgImage, AboutBodyInfo, AboutContainer, AboutTeam, AboutUs } from './AboutStyled'



export const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutBgImage>
          <figure>
            <img src="../cartoon.jpg" alt="img" />
          </figure>
        </AboutBgImage>

        <AboutBodyInfo>
          <AboutTeam >
            <figure>
              <img
                src="../about.jpg"
                alt="img"
              />
            </figure>

            <p>
              Nuestro equipo de profesionales está formado por diseñadores
              gráficos, impresores y cortadores especializados en la creación de
              productos de alta calidad. Utilizamos las últimas tecnologías para
              ofrecer a nuestros clientes los mejores resultados.
            </p>
          </AboutTeam>

          <AboutUs >
            <h1>Pigmentos</h1>
            <h4>
              Somos una imprenta con más de 10 años de experiencia en el diseño
              gráfico y la impresión.
            </h4>

            <span>
              <p>
                Nos dedicamos a la creación de productos personalizados para
                todo tipo de clientes, desde empresas hasta particulares. Si
                necesitas un presupuesto para un proyecto de impresión o diseño
                gráfico, no dudes en contactarnos. Estaremos encantados de
                ayudarte.
              </p>
            </span>
          </AboutUs>
        </AboutBodyInfo>
      </AboutContainer>
    </>
  );
}

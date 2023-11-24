import React from 'react'
import { SectionAboutStyled } from './AboutStyled'

export const About = () => {
  return (
    <SectionAboutStyled>
      <header>
        <h1>Pigmentos</h1>
        <p>Somos una imprenta con más de 10 años de experiencia en el diseño gráfico y la impresión. Nos dedicamos a la creación de productos personalizados para todo tipo de clientes, desde empresas hasta particulares.</p>
      </header>

      <section>
        <h2>Nuestro equipo</h2>
        <p>Nuestro equipo de profesionales está formado por diseñadores gráficos, impresores y cortadores especializados en la creación de productos de alta calidad. Utilizamos las últimas tecnologías para ofrecer a nuestros clientes los mejores resultados.</p>
        {/* <img src="https:/" /> */}
      </section>

      <section>
        <h2>Nuestros servicios</h2>
        <ul>
          <li>Diseño de logotipos, tarjetas de visita, folletos, catálogos, etc.</li>
          <li>Impresión de libros, revistas, periódicos, etc.</li>
          <li>Impresión de etiquetas, embalajes, etc.</li>
          <li>Corte y troquelado de materiales</li>
        </ul>
      </section>

      <section>
        <h2>Nuestros productos personalizados</h2>
        <ul>
          <li>Invitaciones de boda</li>
          <li>Tarjetas de cumpleaños</li>
          <li>Regalos corporativos</li>
          <li>Merchandising</li>
          <li>Decoración</li>
        </ul>
        {/* <img src="https://s" alt="Ilustración de una caja de regalo" /> */}
      </section>

      <section>
        <h2>Contacta con nosotros</h2>
        <p>Si necesitas un presupuesto para un proyecto de impresión o diseño gráfico, no dudes en contactarnos. Estaremos encantados de ayudarte.</p>
        <a href="mailto:info@imprenta.com">info@imprenta.com</a>
        <a href="tel:+54 11 5555 5555">+54 11 5555 5555</a>
      </section>

    </SectionAboutStyled>
  )
}

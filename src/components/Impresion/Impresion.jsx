import React from 'react'
import { ImpresionContainerStyled } from './ImpresionStyled'

import imgCard from "/src/assets/img4.jpg";

export const Impresion = () => {
  return (
    <ImpresionContainerStyled>
      <div>
        <h2>Los mejores productos de impresión</h2>

        <p>El futuro del diseño está al alcance de tu mano.</p>

        <figure>
          <img src={imgCard} alt="img" />
        </figure>
      </div>
    </ImpresionContainerStyled>
  );
}

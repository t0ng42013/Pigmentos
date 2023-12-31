import React from 'react'
import {  Categories, Category } from './ResourcesStyled'
import { Link } from 'react-router-dom';

export const Resources = () => {

  return (
    <>
      <Categories>
        <Category>
          <Link>
            <img src="/assets/img/categories/agendasPediatricas.jpg" alt="" />
          </Link>
        </Category>

        <Category>
          <Link>
            <img src="/assets/img/categories/calcomaniasVinilos.jpg" alt="" />
          </Link>
        </Category>

        <Category>
          <Link>
            <img
              src="/assets/img/categories/calendariosAlmanaques.jpg"
              alt=""
            />
          </Link>
        </Category>

        <Category>
          <Link>
            <img src="/assets/img/categories/candyBar.jpg" alt="" />
          </Link>
        </Category>

        <Category>
          <Link>
            <img src="/assets/img/categories/emprendedores.jpg" alt="" />
          </Link>
        </Category>

        <Category>
          <Link>
            <img src="/assets/img/categories/encuaderdosTesis.jpg" alt="" />
          </Link>
        </Category>

        <Category>
          <Link>
            <img src="/assets/img/categories/encuadernadosTesis.jpg" alt="" />
          </Link>
        </Category>
      </Categories>
      {/* <ResourcesContainer>
        <AllResources>
          <ResourcesTitle>Todos Los Recursos</ResourcesTitle>
          <div></div>
        </AllResources>
      </ResourcesContainer> */}
    </>
  );
}

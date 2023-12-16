import React from 'react'
import { FeaturedCard, FeaturedDetails } from './DestacadosStyled';

export const Destacado = () => {
  return (
    <>
      <FeaturedCard>
        <div class="featured">
          <div class="featuredImg">
            <img
              src="https://instagram.fcor10-3.fna.fbcdn.net/v/t39.30808-6/410247647_958685292396002_171554329259211626_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyIn0&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=AmhXCY75yQYAX-RBIci&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI1ODMwNjQ4MzEzNjg5NDI1Mw%3D%3D.2-ccb7-5&oh=00_AfCFBalOz8CJnPij00ivJtD_bJPc1LzJAfIKeqUREBVPSw&oe=6580EC1C&_nc_sid=ee9879"
              class="img-fluid d-block m-auto"
              alt="featured-image"
            />
          </div>
          <FeaturedDetails >
            <div class="featuredName">
              <h1>
                Productos
                <br />
                <span class="featured-role">Destacado</span>
              </h1>
            </div>
            <div class="featuredSocialLink">
              <ul>
                <li>
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </li>
                {/* <li>
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-behance" aria-hidden="true"></i>
                </li> */}
              </ul>
            </div>
          </FeaturedDetails>
        </div>
      </FeaturedCard>
    </>
  );
}




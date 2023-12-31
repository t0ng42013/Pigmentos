import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Services } from "../../components/UsServices/Services";
import { Design } from "../../components/Design/Design";
import { Impresion } from "../../components/Impresion/Impresion";
import { Destacados } from "../../components/Destacados/Destacados";
import { Categories } from "../../components/Categories/Categories";




export const Home = () => {
  return (
    <>
      <Hero />
      <Destacados />
      
       
      <Categories />
      

      <Services />
      <Design />
      <Impresion />
    </>
  );
};

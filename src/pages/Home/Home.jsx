import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Resources } from "../../components/Resources/Resources";
import { Services } from "../../components/UsServices/Services";
import { Design } from "../../components/Design/Design";
import { Impresion } from "../../components/Impresion/Impresion";




export const Home = () => {
  return (
    <>
      <Hero />
      <Resources />
      <Services />
      <Design />
      <Impresion />
    </>
  );
};

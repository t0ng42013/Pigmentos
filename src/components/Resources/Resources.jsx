import React from 'react'
import { AllResources, CardsContainer, ResourcesButtons, ResourcesContainer, ResourcesTitle, ResoursesOptions, ViewMore } from './ResourcesStyled'
import { Card } from '../Card/Card';
import { useFilter } from '../../context/FilterContext';
import { products } from '../../data/Products';

export const Resources = () => {

 const { filter, updateFilter } = useFilter();

 const handleFilterChange = (newFilter) => {
    console.log("Nuevo filtro:", newFilter);
    updateFilter(newFilter);
 };

 const filteredProducts =
   filter === "todos"
     ? products
     : products.filter((product) => product.category === filter);

  return (
    <ResourcesContainer>
      <AllResources>
        <ResourcesTitle>Todos Los Recursos</ResourcesTitle>
        <div>
          <ResoursesOptions>
            <ResourcesButtons>
              <li>
                <button onClick={() => handleFilterChange("Cuadernos")}>
                  All
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("invitaciones")}>
                  Free
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Fotolibros")}>
                  Pro
                </button>
              </li>
            </ResourcesButtons>
          </ResoursesOptions>
          <CardsContainer>
            {filteredProducts.map((product) => (
              <Card key={product.id}></Card>
            ))}
          </CardsContainer>
        </div>
        <ViewMore>
          <button>View More Designs</button>
        </ViewMore>
      </AllResources>
    </ResourcesContainer>
  );
}

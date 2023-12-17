import React from 'react'
import { AllResources, CardsContainer, ResourcesButtons, ResourcesContainer, ResourcesTitle, ResoursesOptions, ViewMore } from './ResourcesStyled'
import { Card } from '../Card/Card';
import { useFilter } from '../../context/FilterContext';
import { products } from '../../data/Products';

export const Resources = () => {

 const { filter, updateFilter } = useFilter();

 const handleFilterChange = (newFilter) => {    
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
                <button onClick={() => handleFilterChange("Personalizados")}>
                  Personalizados
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Papelería")}>
                  Papelería
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Especiales")}>
                  Especiales
                </button>
              </li>
            </ResourcesButtons>
          </ResoursesOptions>
          <CardsContainer>
            {filteredProducts.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </CardsContainer>
        </div>
        {filter !== "todos" && (
          <ViewMore>
            <button onClick={() => handleFilterChange("todos")}>
              View More Designs
            </button>
          </ViewMore>
        )}
      </AllResources>
    </ResourcesContainer>
  );
}

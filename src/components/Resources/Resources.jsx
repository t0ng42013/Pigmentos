import React from 'react'
import { AllResources, CardsContainer, ResourcesButtons, ResourcesContainer, ResourcesTitle, ResoursesOptions, ViewMore } from './ResourcesStyled'
import { Card } from '../Card/Card';

export const Resources = () => {
  return (
    <ResourcesContainer>
      <AllResources>
        <ResourcesTitle>Todos Los Recursos</ResourcesTitle>
        <div>
          <ResoursesOptions>
            <ResourcesButtons>
              <li>
                <button>All</button>
              </li>
              <li>
                <button>Free</button>
              </li>
              <li>
                <button>Pro</button>
              </li>
            </ResourcesButtons>
          </ResoursesOptions>
          <CardsContainer>
            <div>
              <Card></Card>
            </div>
          </CardsContainer>
        </div>
        <ViewMore>
          <button>View More Designs</button>
        </ViewMore>
      </AllResources>
    </ResourcesContainer>
  );
}

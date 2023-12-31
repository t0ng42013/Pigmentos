
import {
  ContainerCollection,
  ContainerCollectionBtn,
  ContainerCollectionNav,
  ContainerCollectionPrimary,
  ViewMore,
} from "./ProductsStyled";
import { Card } from "../../components/Card/Card";
import { ProductFilter } from "./ProductFilter";

import { MdFilterAlt } from "react-icons/md";


import {  useFilter } from "../../context/FilterContext";
import { products } from "../../data/Products";

export const ProductsCollection = () => {

 
  const { state, dispatch, handleFiltro,filtro } = useFilter();
  


 const handleOrderChange = (e) => {
   const { value } = e.target;
   dispatch({ type: "SET_ORDER_BY", payload: value });
 };

   const handleShowMore = () => {
     dispatch({ type: "SHOW_MORE_PRODUCTS" });
   };

  return (
    <ContainerCollection onClick={()=> filtro && handleFiltro()}>
      <ContainerCollectionPrimary>
        <ContainerCollectionNav>
          <ContainerCollectionBtn onClick={() => handleFiltro()}>
            <MdFilterAlt />
            Filtros
          </ContainerCollectionBtn>
          <h1>Catálogo de Productos</h1>
          <form>
            <input type="hidden" name="searchQuery" />
            <select
              name="orderby"
              value={state.orderby}
              onChange={handleOrderChange}
            >
              <option value="price-asc">
                Ordenar por precio: menor a mayor
              </option>
              <option value="price-desc">
                Ordenar por precio: mayor a menor
              </option>
              <option value="name-asc">Ordenar alfabéticamente: A a Z</option>
              <option value="name-desc">Ordenar alfabéticamente: Z a A</option>
              <option selected="selected" value="ordenar">
                Ordenar por orden Producto
              </option>
            </select>
          </form>
        </ContainerCollectionNav>

        {state.productos.slice(0, state.visibleProducts).map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}

        {state.visibleProducts < state.productos.length && (
          <ViewMore>
            <button onClick={handleShowMore}>Ver más productos</button>
          </ViewMore>
        )}
      </ContainerCollectionPrimary>
      <ProductFilter />
    </ContainerCollection>
  );
};

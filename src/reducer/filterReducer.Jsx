import { products } from "../data/Products";



export const FilterInitialState = {
  productos: products,
  orderby: "ordenar",
  bandera: true,
  visibleProducts: 8,
};

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_CATEGORY":
      return {
        ...state,
        category: action.payload,
        productos: products.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
        bandera: false,
        visibleProducts: 8,
      };
    case "RESET_FILTER":
      // Acción para restablecer el estado al valor inicial
      return FilterInitialState;

    case "SET_ORDER_BY":
      const sortedProducts = [...state.productos];
      switch (action.payload) {
        case "price-asc":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          sortedProducts.sort((a, b) => a.id - b.id);
          break;
      }
      return {
        ...state,
        orderby: action.payload,
        productos: sortedProducts,
      };
    case "SHOW_MORE_PRODUCTS":
      const increment = 4; // Incremento para mostrar más productos
      const newVisibleProducts = state.visibleProducts + increment;
      return {
        ...state,
        visibleProducts: Math.min(newVisibleProducts, state.productos.length),
      };

    default:
      return state;
  }
};

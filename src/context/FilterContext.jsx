import { createContext, useContext, useReducer, useState} from "react";
import { FilterReducer } from "../reducer/filterReducer.Jsx";
import { FilterInitialState } from "../reducer/filterReducer.Jsx";


export const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter debe estar dentro del proveedor FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }) => {
const [state, dispatch] = useReducer(FilterReducer,FilterInitialState)
const [filtro, setFiltro] = useState(false)


const handleFiltro = () => {
  setFiltro(!filtro);
};

  const contextValue = {
    state,
    dispatch,
    handleFiltro,
    filtro
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};


import { createContext, useContext, useState } from "react";


const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter debe estar dentro del proveedor FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("todos"); 

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const contextValue = {
    filter,
    updateFilter,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};


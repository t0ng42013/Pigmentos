
import { FilterCategory, Sidebar} from "./ProductsStyled";

import { products } from "../../data/Products";
import { useFilter } from "../../context/FilterContext";

export const ProductFilter = () => {

const { dispatch , filtro } = useFilter();


  return (
    <Sidebar style={{ left: filtro ? "0" : "-340px" }}>
      <div>
        <FilterCategory>
          <li>
            <ul>
              <li>
                <span onClick={() => dispatch({ type: "RESET_FILTER" })}>
                  Mostrar todo
                </span>
              </li>
            </ul>

            <ul>
              <li>
                <strong className="categ">Catégorias</strong>

                <ul className="children">
                  {products.map((category) => (
                    <li key={category.id}>
                      <a
                        onClick={() =>
                          dispatch({
                            type: "FILTER_CATEGORY",
                            payload: category.name,
                          })
                        }
                      >
                        {category.name.split(/,|\s/)[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </FilterCategory>
      </div>
    </Sidebar>
  );
};

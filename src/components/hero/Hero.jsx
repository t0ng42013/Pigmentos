import { useState } from "react";
import { HeroButton, HeroContainer, HeroForm, HeroHeader, HeroImageB, HeroImageR, HeroInput, HeroParagraph, HeroTitle, ResultSearch } from "./HeroStyled";


import { FaSearch } from "react-icons/fa";
import { products } from "../../data/Products";
import { Link } from "react-router-dom";


export const Hero = () => {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([])

 const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
 

  // Filtrar los productos según el término de búsqueda
    const results = products.filter((productos) =>
      productos.name.toLowerCase().includes(term.toLowerCase())
    );
    setResult(results);
  };

  return (
    <HeroContainer>
      <HeroImageR>
        <img src="/assets/imgBgBlurRed.svg" alt="" />
      </HeroImageR>
      <HeroImageB>
        <img src="/assets/imgBgBlurBlue.png" alt="" />
      </HeroImageB>
      <HeroHeader>
        <HeroTitle>Explorar Todos Los Recursos</HeroTitle>
        <HeroParagraph>
          Los mejores recursos de diseño del mundo en un solo lugar
        </HeroParagraph>
        <HeroForm>
          <HeroInput
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar por producto"
          />
          <HeroButton>
            <a href="/#">
              <FaSearch />
            </a>
          </HeroButton>
        </HeroForm>
        <ResultSearch search={search}>
          {result.length > 0 ? (
            result.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <p>{product.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </ResultSearch>
      </HeroHeader>
    </HeroContainer>
  );
}

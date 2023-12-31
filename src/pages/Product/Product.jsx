import React, { useContext } from "react";
import {
  ContainerImage,
  ContainerImageExample,
  ProductCardContainer,
  ProductContainer,
  ProductContainerDescription,
  ProductContainerImage,
  ProductContainerInfo,
} from "./ProductStyled";

import { Link, useParams } from "react-router-dom";
import { products } from "../../data/Products";
import Swal from "sweetalert2";
import { MenuContext } from "../../context/MenuContext";
import { useCart } from "../../context/CartContext";



export const Product = () => {
 const { toggleCart } = useContext(MenuContext);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);

   };

const handleBuy = () => {
     Swal.fire({
       title: "Agregar al carrito",
       text: "Producto agregado",
       showCancelButton: true,
       confirmButtonText: "Ir al carrito",
       cancelButtonText: "Seguir Comprando",
     }).then((result) => {
       handleAddToCart(selectedProduct);
       if (result.isConfirmed) {
         window.scrollTo(0, 0);
         toggleCart();
       }
     });
};

  let { id } = useParams();

   const selectedProduct = products.find(
     (producto) => producto.id === parseInt(id)
   );

    if (!selectedProduct) {
      return <div>Producto no encontrado</div>;
    }
  return (
    <section>
      {products.map((products) => products.id === id)}
      <ProductContainer>
        <ProductContainerImage>
          <ContainerImage>
            <img src={selectedProduct.image} alt={selectedProduct.image} />
          </ContainerImage>
          <ContainerImageExample>
            <Link>
            <img src={selectedProduct.image} alt="foto 1" />
            </Link>
            <img src={selectedProduct.image} alt="foto 2" />
            <img src={selectedProduct.image} alt="foto 3" />
          </ContainerImageExample>
        </ProductContainerImage>

        <ProductContainerInfo>
          <div className="titleCardInfo">
            <h1>{selectedProduct.name}</h1>
          </div>


          <p className="code">CÓDIGO: 10602301228</p>

          <ProductCardContainer>
            <p>Precio normal: ${selectedProduct.price}</p>
            <h2>
              Precio web:{" "}
              <strong>
                ${selectedProduct.price - selectedProduct.price * 0.1}
              </strong>
            </h2>
            <span>* Precio exclusivo para compras desde la web</span>
            <div class="cardInput">
              <label for="quantity-input">Cantidad</label>
              <input
                type="number"
                size="4"
                title="Cant"
                value="1"
                name="quantity"
                id="quantity-input"
              />
            </div>
            <button onClick={()=>handleBuy()}>Comprar</button>
          </ProductCardContainer>
        </ProductContainerInfo>

        <ProductContainerDescription>
          <h4>Descripción</h4>
          <p>{selectedProduct.description}</p>
        </ProductContainerDescription>
      </ProductContainer>
    </section>
  );
};

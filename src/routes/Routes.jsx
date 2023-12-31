import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { About } from "../pages/About/About";
import { ProductsCollection } from "../pages/Products/ProductsCollection";
import { Login } from "../pages/Login/Login";
import { PageNotFound } from "../components/Page404/PageNotFound";
import { Product } from "../pages/Product/Product";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      <Route path="/products">
        <Route index  element={<ProductsCollection />} />
        <Route path=":id" element={<Product />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;

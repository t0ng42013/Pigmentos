import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { About } from "../pages/About/About";
import { ProductsCollection } from "../pages/Products/ProductsCollection";
import { Login } from "../pages/Login/Login";
import { PageNotFound } from "../components/Page404/PageNotFound";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsCollection/>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />

     
    </ReactDomRoutes>
  );
}

export default Routes;

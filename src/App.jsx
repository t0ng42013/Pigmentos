import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";
import { MenuContextProvider } from "./context/MenuContext";
import Routes from "./routes/Routes";

function App() {
  
  return (
    <>
      <CartContextProvider>
        <MenuContextProvider>
          <FilterProvider>
            <Navbar />

          <Layout>
            <Routes />
          </Layout>

          <Footer />
          </FilterProvider>          
        </MenuContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;

import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { MenuContextProvider } from "./context/MenuContext";
import Routes from "./routes/Routes";

function App() {
  
  return (
    <>
      <CartContextProvider>
        <MenuContextProvider>
          
          <Navbar />

          <Layout>
            <Routes />
          </Layout>

          <Footer />
        </MenuContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;

import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import { MenuContextProvider } from "./context/MenuContext";
import Routes from "./routes/Routes";

function App() {
  
  return (
  <>
  <MenuContextProvider >
    
  <Navbar />

      <Layout>
        <Routes />
      </Layout>

      <Footer />

  </MenuContextProvider>

  </>
      
  );
}

export default App;

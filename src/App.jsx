import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar />

      <Layout>
        <Routes />
      </Layout>

      <Footer />
    </>
  );
}

export default App;

import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Recommended from "./components/recommended/Recommended";
import { PrimeReactProvider } from "primereact/api";
import "./styles/global.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Content />
          <Recommended />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

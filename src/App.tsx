import { Paper } from "@mui/material";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Recommended from "./components/recommended/Recommended";
import "./styles/global.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Artist from "./components/artists/Artist";
import Fusion from "./components/fusion/Fusion";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "top-tracks",
          element: <Content />,
        },
        {
          path: "top-artists",
          element: <Artist />,
        },
        {
          path: "artist-fusion",
          element: <Fusion />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

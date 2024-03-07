import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Men from "./pages/Men/Men.jsx";
import Women from "./pages/Women/Women.jsx";
import Kids from "./pages/Kids/Kids.jsx";
import Register from "./pages/Authentication/Register.jsx";
import Login from "./pages/Authentication/Login.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Account from "./pages/Account/Account.jsx";

function App() {
  const Layout = function () {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/kids",
          element: <Kids />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

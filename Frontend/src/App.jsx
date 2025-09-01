import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Announcment from "./components/Announcment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <Announcment />
        <Navbar />
        <Outlet />
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
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/myaccount",
          element: <MyAccount />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

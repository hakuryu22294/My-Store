import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Error,
  Landing,
  Register,
  HomeLayout,
  Cart,
  Checkout,
  Orders,
  Products,
  SingleProduct,
  Login,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, errorElement: <Error /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
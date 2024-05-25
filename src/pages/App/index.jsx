import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../components/NavBar";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import {ShoppingCartProvider} from "../../Context";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;

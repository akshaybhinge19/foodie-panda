import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./views/About";
import ContactUs from "./views/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./views/RestaurantMenu";
import Cart from "./views/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./views/Grocery";

const Grocery  = lazy(()=> import("./views/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet/>
        <Footer />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  { 
    path:'/', 
    element: <AppLayout/>, 
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/grocery', element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />           
        </Suspense>
      },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/restaurants/:id', element: <RestaurantMenu /> },
      { path: '/cart', element: <Cart /> },
    ],
    errorElement: <Error/>
  },
],
{basename: '/foodie-panda'});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

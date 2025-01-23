import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import FeedbackForm from "./components/FeedbackForm";
import MenuRes from "./components/MenuRes";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import stores from "./redux/store";
import Cart from "./components/Cart";
import BackButton from "./components/BackButton";

function AppLayout() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Navbar />
      <BackButton />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants",
        element: <Restaurant />,
      },
      {
        path: "/menu/:id",
        element: <MenuRes />,
      },
      {
        path: "/feedback",
        element: <FeedbackForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={stores}>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  );
}

export default App;

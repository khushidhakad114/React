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

function AppLayout() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Navbar />
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
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}
<provider>
 
</provider>

export default App;

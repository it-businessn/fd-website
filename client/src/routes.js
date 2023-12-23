import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import About from "./pages/about";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services/:id",
        element: <Services />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

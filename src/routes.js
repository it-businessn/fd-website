import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

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
      //   {
      //     path: "*",
      //     element: <PageNotFound />,
      //   },
    ],
  },
]);

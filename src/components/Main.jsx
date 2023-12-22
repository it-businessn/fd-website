import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Nav from "../pages/Nav";

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;

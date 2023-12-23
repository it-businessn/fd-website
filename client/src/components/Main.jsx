import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav/Nav";

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

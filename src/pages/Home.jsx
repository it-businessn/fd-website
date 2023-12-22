import AboutMain from "./AboutMain";
import Footer from "./Footer";
import MoreFeatures from "./MoreFeatures";
import Nav from "./Nav";
import TabService from "./TabService";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMain />
      <TabService />
      <MoreFeatures />
      <Footer />
    </>
  );
}

import BuySell from "../components/BuySell";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import Designs from "components/Designs";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Designs />
      <BuySell />
      <Blogs />
    </>
  );
}

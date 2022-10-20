import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
//import Blogs from "../components/Blogs";
import Services from "../components/Services";
import Portfolio from "components/Portfolio";
import Testimonials from "components/Testimonials";
import Products from "components/Products";
import Newsletter from "components/Newsletter.tsx";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      {/* <Blogs /> */}
    </>
  );
}

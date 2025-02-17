import Basecontact from "../components/Home-Components/basecontact";
import Contact from "../components/Home-Components/Contact";
import FAQs from "../components/Home-Components/FAQs";
import Features from "../components/Home-Components/Features";
import Hero from "../components/Home-Components/Hero";
import ProductRange from "../components/Home-Components/ProductRange";
import WhyChooseUs from "../components/Home-Components/WhyChooseus";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <WhyChooseUs />
      <ProductRange />
      <Basecontact />
      <Contact />
      <FAQs />
    </div>
  );
}

import Basecontact from "../components/HomeComponents/Basecontact";
import Contact from "../components/HomeComponents/Contact";
import FAQs from "../components/HomeComponents/FAQs";
import Features from "../components/HomeComponents/Features";
import Hero from "../components/HomeComponents/Hero";
import ProductRange from "../components/HomeComponents/ProductRange";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";

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

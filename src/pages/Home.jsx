import Basecontact from "../components/HomeComponents/Basecontact";
import FAQs from "../components/HomeComponents/FAQs";
import Features from "../components/HomeComponents/Features";
import Hero from "../components/HomeComponents/Hero";
import ProductRange from "../components/HomeComponents/ProductRange";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import Testimonials from "../components/HomeComponents/Testimonials";
import Quality from "../components/HomeComponents/Quality";
import { HdpePipeTable } from "../components/HomeComponents/HdpePipeTable";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <WhyChooseUs />
      <ProductRange />
      <Basecontact />
      <Quality />
      <HdpePipeTable />
      <FAQs />
      <Testimonials />
    </div>
  );
}

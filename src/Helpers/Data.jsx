import halfinch from "../assets/1-5inch.svg";
// import twoinch from "../../assets/2inch.svg";
// import threeinch from "../../assets/3inch.svg";
// import fourinch from "../../assets/4inch.svg";
// import sixinch from "../../assets/6inch.svg";
// import eightinch from "../../assets/8inch.svg";
// import teninch from "../../assets/10inch.svg";
// import fourteeninch from "../../assets/14inch.svg";
import use1 from "../assets/use1.svg";

export const AboutStats = [
  {
    number: "24+",
    title: "Years Experience",
  },
  {
    number: "5000+",
    title: "Mega Projects",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
  },
];

const productsData = [
  {
    id: "1",
    title: "1/2 inch UPvc Pipe",
    image: halfinch, // adjust path to your actual asset
    specs: {
      material: "Polyethylene (PE)",
      diameterRange: "20mm – 1200mm",
      pressureRating: "PN 6 to PN 20",
      standard: "ISO 4427, DIN 8074/75, IS 4984",
    },
    description: `
      HDPE Pipes are lightweight, flexible, and durable, offering excellent resistance to corrosion, UV rays, and chemicals. 
      Ideal for agricultural, industrial, and municipal applications, HDPE pipes ensure long-lasting and leak-free performance.
    `,
    useCaseImage: use1, // adjust path to your actual asset
    useCaseText:
      "HDPE Pipes are widely used in agriculture for irrigation due to their high strength and flexibility.",
    features: [
      "Corrosion resistant",
      "UV and chemical resistant",
      "Leak-proof joints",
      "High impact strength",
      "Long service life",
    ],
    applications: [
      "Water supply and distribution",
      "Agriculture and irrigation",
      "Industrial piping",
      "Gas distribution networks",
    ],
    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // You can add more products here in the same format
];

export default productsData;

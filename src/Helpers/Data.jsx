import halfinch from "../assets/1-5inch.svg";
// import twoinch from "../../assets/2inch.svg";
// import threeinch from "../../assets/3inch.svg";
// import fourinch from "../../assets/4inch.svg";
// import sixinch from "../../assets/6inch.svg";
// import eightinch from "../../assets/8inch.svg";
// import teninch from "../../assets/10inch.svg";
// import fourteeninch from "../../assets/14inch.svg";
import use1 from "../assets/use1.svg";

// export const products = [
//   {
//     id: 1,
//     name: "14-inch Irrigation UPVC Pipe",
//     material: "UPVC",
//     pressureRating: "PN16",
//     temperatureRange: "0°C to 60°C",
//     length: "6 meters",
//     image: "/productimg.svg",
//   },
//   {
//     id: 2,
//     name: "10-inch Industrial Drainage Pipe",
//     material: "High-Density Polyethylene (HDPE)",
//     pressureRating: "PN10",
//     temperatureRange: "-10°C to 80°C",
//     length: "4 meters",
//     image: "/productimg1.svg",
//   },
//   {
//     id: 3,
//     name: "8-inch Heavy-Duty Sewer Pipe",
//     material: "Reinforced Concrete",
//     pressureRating: "PN20",
//     temperatureRange: "-5°C to 70°C",
//     length: "3 meters",
//     image: "/hi-pre4.svg",
//   },
//   {
//     id: 4,
//     name: "6-inch PVC Electrical Conduit",
//     material: "PVC",
//     pressureRating: "PN6",
//     temperatureRange: "0°C to 50°C",
//     length: "6 meters",
//     image: "/hi-pre12.svg",
//   },
//   {
//     id: 5,
//     name: "24-inch High-Pressure Water Pipe",
//     material: "Galvanized Steel",
//     pressureRating: "PN25",
//     temperatureRange: "-20°C to 90°C",
//     length: "12 meters",
//     image: "/hi-pre12.svg",
//   },
//   {
//     id: 6,
//     name: "20-inch Underground Sewer Pipe",
//     material: "Concrete Fiber",
//     pressureRating: "PN18",
//     temperatureRange: "-10°C to 60°C",
//     length: "8 meters",
//     image: "/hi-pre12.svg",
//   },
// ];

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

import Images from "../assets/images";


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

export const productsData = [
  {
    id: "1",
    title2: "1/2-Inch PVC Pipes",
    title: "1/2 inch UPvc Pipe",
    image: Images.halfinch, // adjust path to your actual asset
    specs: [
      { label: "Size", value: "1/2' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.halfinch, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 1/2-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 2
  {
    id: "2",
    title2: "2-Inch PVC Pipes",
    title: "2 inch UPvc Pipe",
    image: Images.twoinchPipe, // adjust path to your actual asset
    specs: [
      { label: "Size", value: "2' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.twoinchPipeInstallation, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 2-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // You can add more products here in the same format

  // 3
  {
    id: "3",
    title2: "3-Inch PVC Pipes",
    title: "3 inch UPvc Pipe",
    image: Images.threeinchPipe,
    specs: [
      { label: "Size", value: "3' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.threeInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 3-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 4

  {
    id: "4",
    title2: "4-Inch PVC Pipes",
    title: "4 inch UPvc Pipe",
    image: Images.fourinchPipe,
    specs: [
      { label: "Size", value: "4' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.fourInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 4-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 6
  {
    id: "6",
    title2: "6-Inch PVC Pipes",
    title: "6 inch UPvc Pipe",
    image: Images.sixinchPipe,
    specs: [
      { label: "Size", value: "6' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.fourInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 6-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 8
  {
    id: "8",
    title2: "8-Inch PVC Pipes",
    title: "8 inch UPvc Pipe",
    image: Images.eightinchPipe,
    specs: [
      { label: "Size", value: "8' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.eightInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 8-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 10
  {
    id: "10",
    title2: "10-Inch PVC Pipes",
    title: "10 inch UPvc Pipe",
    image: Images.teninchPipe,
    specs: [
      { label: "Size", value: "10' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.tenInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 10-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },

  // 12
  {
    id: "12",
    title2: "12-Inch PVC Pipes",
    title: "12 inch UPvc Pipe",
    image: Images.twelveinchPipe,
    specs: [
      { label: "Size", value: "12' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.twelveInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 12-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
  // 14

  {
    id: "14",
    title2: "14-Inch PVC Pipes",
    title: "14 inch UPvc Pipe",
    image: Images.fourteeninchPipe,
    specs: [
      { label: "Size", value: "14' Inches" },
      { label: "Outside Diameter", value: "114.30mm" },
      { label: "Inside Diameter", value: "102.26mm" },
      { label: "Wall Thickness", value: "6.02" },
      { label: "Max Pressure", value: "12 bar / 180 psi" }
    ],

    description: () => (
      <>
        <p className="text-[#134697] font-semibold">Durable Material</p>
        <p className="text-gray-700 mb-2">
          Crafted from premium-grade unplasticized polyvinyl chloride (uPVC), these pipes offer exceptional structural integrity.
          uPVC is renowned for its high tensile strength and rigidity, making it ideal for both underground and surface installations.
          The material&appos;s toughness allows it to withstand physical impact and internal pressure without deforming, ensuring reliable performance over an extended lifespan.
        </p>

        <p className="text-[#134697] font-semibold">Corrosion Resistant</p>
        <p className="text-gray-700 mb-2">
          Unlike traditional metal piping systems, uPVC pipes are completely immune to corrosion, rust, and scaling. This non-metallic composition
          eliminates the risk of pipe degradation caused by moisture, acids, or environmental exposure. As a result, maintenance is significantly
          reduced and system longevity is greatly enhanced, especially in harsh or humid environments.
        </p>

        <p className="text-[#134697] font-semibold">Chemical Resistance</p>
        <p className="text-gray-700 mb-2">
          Engineered to resist a wide spectrum of chemicals—including acids, alkalis, and salts—PVC pipes are ideal for industrial, agricultural,
          and domestic fluid transportation. Their inert chemical properties ensure that the material won’t react with contents being transported,
          thus preventing contamination or pipe failure. This makes them particularly suitable for applications involving wastewater, chemical solutions,
          or corrosive fluids.
        </p>

        <p className="text-[#134697] font-semibold">Weatherproof Performance</p>
        <p className="text-gray-700">
          These pipes offer excellent resistance to UV radiation, ozone, rain, and humidity. Their molecular structure prevents damage caused by
          prolonged sun exposure or extreme temperatures, which helps avoid cracking, brittleness, or discoloration over time. This weatherproof
          quality ensures that PVC pipes remain effective and visually intact in both outdoor and exposed applications.
        </p>
      </>
    ),

    useCaseImage: Images.fourteenInchInstall, // adjust path to your actual asset
    useCaseText: () => (
      <>
        <p className="text-[#134697]  font-bold text-xl">🛠️ Why Choose 14-Inch PVC Pipes?</p>
        <ul className=" mb-2 space-y-6">
          <li>High Flow Capacity for bulk transportation</li>
          <li>Corrosion and Chemical Resistance</li>
          <li>Low Installation and Maintenance Costs</li>
          <li>Long Life Span (50+ years)</li>
          <li>Lightweight and Easy to Handle</li>
        </ul>
      </>
    ),

    applications: () => (
      <>
        <ul className="list-none pl-5  space-y-6">
          <li >✔ Water supply and distribution</li>
          <li>✔ Agriculture and irrigation</li>
          <li>✔ Industrial piping</li>
          <li>✔ Gas distribution networks</li>
          <li><strong className="text-[#134697]">✔ Residential & Commercial Plumbing:</strong> Commonly used for drainage lines, wastewater disposal, and venting systems. Ideal for connecting bathroom fixtures like sinks, bathtubs, and toilets to the main drain.</li>
          <li><strong className="text-[#134697]">✔ Aquaponics and Hydroponics:</strong> Used in water circulation systems due to its corrosion resistance and easy installation.</li>
          <li><strong className="text-[#134697]">✔ Rainwater Harvesting:</strong> Installed in downspout systems to direct rainwater to collection tanks or soak pits.</li>
          <li><strong className="text-[#134697]">✔ Electrical Conduit:</strong> Protects electrical cables in outdoor or damp environments.</li>
          <li><strong className="text-[#134697]">✔ Water Supply Lines (Non-Pressurized):</strong> In small-scale setups like water tanks or livestock water systems, 2-inch pipes are used for low-pressure distribution.</li>
        </ul>
      </>
    ),

    tableComponent: "HdpePipeTable", // your table component name
    testimonialsComponent: "Testimonials", // your testimonial component
  },
];






export const products = [
  { id: "1", title: "1/2 Inch PVC Pipe", img: Images.halfinch },
  { id: "2", title: "2 Inch PVC Pipe", img: Images.twoinch },
  { id: "3", title: "3 Inch PVC Pipe", img: Images.threeinch },
  { id: "4", title: "4 Inch PVC Pipe", img: Images.fourinch },
  { id: "6", title: "6 Inch PVC Pipe", img: Images.sixinch },
  { id: "8", title: "8 Inch PVC Pipe", img: Images.eightinch },
  { id: "10", title: "10 Inch PVC Pipe", img: Images.teninch },
  { id: "12", title: "12 Inch PVC Pipe", img: Images.twelveinchPipe },
  { id: "14", title: "14 Inch PVC Pipe", img: Images.fourteeninch },
];


export const pipeFeatures = [
  {
    title: "Exceptional Durability",
    description:
      "Our uPVC pipes are built to last. Engineered from high-grade unplasticized PVC, they resist physical wear, heavy loads, and external pressure — ensuring long-term performance even in demanding conditions.",
  },
  {
    title: "Leak-Proof Construction",
    description:
      "Thanks to precision joints and uniform wall thickness, our pipes guarantee a leak-free connection system, minimizing water loss and system failure.",
  },
  {
    title: "Corrosion and Chemical Resistance",
    description:
      "Unlike metal alternatives, PVC pipes do not corrode or react with most chemicals, making them ideal for transporting potable water, industrial fluids, or corrosive substances.",
  },
  {
    title: "Lightweight & Easy to Install",
    description:
      "PVC pipes are significantly lighter than metal or concrete alternatives, reducing transportation costs and enabling quick, hassle-free installations with basic tools.",
  },
  {
    title: "UV & Weather Resistant",
    description:
      "With built-in UV stabilization, our pipes withstand prolonged exposure to sunlight, humidity, and temperature fluctuations without degradation or discoloration.",
  },
  {
    title: "Eco-Friendly and Recyclable",
    description:
      "Our pipes are free from hazardous plasticizers and can be recycled after use — making them a sustainable choice for long-term infrastructure.",
  },
];
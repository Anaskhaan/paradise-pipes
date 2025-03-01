const ManufacturingProcess = () => {
  const manufacturingSteps = [
    {
      image: "/raw.webp",
      title: "Raw Material Selection",
      description:
        "Premium grade PEEK resins and additives are carefully assessed and selected.",
    },
    {
      image: "/precise.webp",
      title: "Precise Mixing",
      description:
        "Computer-controlled mixing ensures perfect compound consistency.",
    },
    {
      image: "/quality.webp",
      title: "Quality Testing",
      description:
        "Rigorous testing at every stage ensures product excellence.",
    },
  ];

  return (
    <div>
      <section>
        <div className="bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-start">
            Our Manufacturing Process
          </h2>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {manufacturingSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-xl bg-white"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-16 w-auto  mb-4"
                  />
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingProcess;

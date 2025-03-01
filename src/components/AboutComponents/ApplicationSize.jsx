import React from 'react';

const ApplicationSize = () => {
  const applications = [
    {
      title: "Plumbing Solutions",
      imageSrc: "/Group 111.webp",
      alt: "Plumbing icon"
    },
    {
      title: "Drainage Solutions",
      imageSrc: "/Group 114.webp",
      alt: "Drainage icon"
    },
    {
      title: "Construction & Infrastructure",
      imageSrc: "/Layer_2.webp",
      alt: "Construction icon"
    },
    {
      title: "Agricultural Solutions",
      imageSrc: "/Layer_1.webp",
      alt: "Agricultural icon"
    },
    {
      title: "Industrial & Chemical Use",
      imageSrc: "/Group 113.webp",
      alt: "Industrial icon"
    },
    {
      title: "Cable Protection",
      imageSrc: "/Group 112.webp",
      alt: "Cable Protection icon"
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <section className="w-full max-w-4xl mx-auto py-6 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
          Wide Range of Sizes & Applications:
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {applications.map((app, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 hover:border-orange-500 rounded-lg shadow-md transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <img 
                  src={app.imageSrc} 
                  alt={app.alt} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium text-center">{app.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApplicationSize;
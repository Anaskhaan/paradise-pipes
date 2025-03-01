import React from "react";


const TestimonialCard = ({ name, title, quote, text, image }) => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 h-auto rounded shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{title}</p>
        </div>
      </div>
      <h4 className="font-bold text-base sm:text-lg mb-2">"{quote}"</h4>
      <p className="text-gray-700 text-sm sm:text-base">{text}</p>
    </div>
  );
};


const Testimonials = () => {
  const testimonials = [
    {
      name: "Engr. Ahmad Khan",
      title: "Chief Engineer Alpha Constructions",
      quote: "Exceptional Quality & Durability",
      text: "We've been using Paradise PVC pipes for our construction projects, and the quality is outstanding. The pipes are durable, leakproof, and easy to install. Highly recommended.",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Engr. Ahmad Khan",
      title: "Chief Engineer Alpha Constructions",
      quote: "Exceptional Quality & Durability",
      text: "We've been using Paradise PVC pipes for our construction projects, and the quality is outstanding. The pipes are durable, leakproof, and easy to install. Highly recommended.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Engr. Ahmad Khan",
      title: "Chief Engineer Alpha Constructions",
      quote: "Exceptional Quality & Durability",
      text: "We've been using Paradise PVC pipes for our construction projects, and the quality is outstanding. The pipes are durable, leakproof, and easy to install. Highly recommended.",
      image: "/images/testimonial3.jpg",
    },
  ];


  return (
    <div className="bg-gray-200 p-6 sm:p-8 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-start">
        What our clients say about us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};


export default Testimonials;

import { Star, Quote } from "lucide-react";

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
    <div className="bg-gray-100 p-8 md:p-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What our clients say
        </h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                <Quote size={20} className="text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
              {testimonial.quote}
            </h3>

            {/* Text */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Profile */}
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-gray-100 group-hover:border-gray-300 transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 rounded-full group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      
    </div>
  );
};

export default Testimonials;
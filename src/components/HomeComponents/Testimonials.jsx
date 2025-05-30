import p1 from "../../assets/engahmad.svg";
import p2 from "../../assets/deptt.svg";
import p3 from "../../assets/engsana.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Engr. Ahmad Khan",
      title: "Chief Engineer Alpha Constructions",
      text: "We've been using Paradise PVC pipes for our construction projects, and the quality is outstanding. The pipes are durable, leakproof, and easy to install. Highly recommended.",
      image: p1,
    },
    {
      name: "Procurement Deptt",
      title: "Punjab Municipal Works",
      text: "We source thousands of meters annually, and these pipes always meet our quality and delivery standards. They are weather-resistant and perform reliably in diverse climates.",
      image: p2,
    },
    {
      name: "Engr. Sanaullah Malik",
      title: "Site Eng., Urban Site Solution",
      text: "The precision in sizing and strength of these uPVC pipes is outstanding. No cracks or leaks even under pressure. They've become our go-to choice for plumbing and drainage installations.",
      image: p3,
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-16 px-4">
      {/* Section Header */}
      <h2 className="text-xl text-[#134697] font-semibold mb-12 ml-4 md:ml-16">
        What our Clients says About Us
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            {/* Profile */}
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-sm font-bold text-[#134697]">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            {/* Testimonial Text */}
            <p className="text-sm text-gray-700 leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

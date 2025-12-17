const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What I Do
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Services I provide to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Web Development",
            desc: "Building responsive, modern web applications with React, Node.js and modern technologies.",
            icon: "💻",
            color: "border-blue-200 bg-blue-50",
          },
          {
            title: "UI/UX Design",
            desc: "Creating beautiful, user-friendly interfaces with focus on user experience and modern design principles.",
            icon: "🎨",
            color: "border-purple-200 bg-purple-50",
          },
          {
            title: "Problem Solving",
            desc: "Solving complex problems with efficient algorithms and optimized solutions for better performance.",
            icon: "⚡",
            color: "border-green-200 bg-green-50",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border-2 ${service.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

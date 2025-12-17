import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to bring your ideas to life?
        </h2>
        <p className="mb-6 opacity-90 max-w-xl mx-auto">
          Let's work together to create something amazing!
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CTASection;

import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const HeroSection = ({ about, roles, currentRole }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
      {/* LEFT */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {about?.title|| "Suyash"}
          </span>
        </h1>

        {/* 🔥 ROLE WITH TYPING LINE */}
        <div className="text-xl md:text-2xl text-gray-600 mb-6 h-8">
          <span className="relative">
            {roles[currentRole]}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-typing-line"></span>
          </span>
        </div>

        <p className="text-gray-600 text-lg mb-8">
          {about?.description || "Passionate developer creating amazing web experiences"}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() =>
              navigate(
                "https://cdn.enhancv.com/predefined-examples/aKd9rVtC4r9CCHlZzMiGisTZnGKtwr4rqSqjA95o/image.png"
              )
            }
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
          >
            <FaDownload /> Download CV
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>

        <SocialLinks />
      </div>

      {/* RIGHT IMAGE */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          {/* 🔥 Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>

          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group hover:scale-105 transition-transform duration-500">
            <img
              src={about?.image}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* 🔥 Top right bounce */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
            <FaStar size={18} />
          </div>

          {/* 🔥 Bottom left bounce */}
          <div
            className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-sm font-bold">☆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

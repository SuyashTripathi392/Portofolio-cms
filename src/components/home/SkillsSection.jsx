import { FaCode, FaFire, FaTools, FaDatabase, FaPalette, FaServer, FaMobileAlt, FaCloud } from "react-icons/fa";

const SkillsSection = ({ skills, getIconComponent }) => (
  <section className="py-16 px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
        <FaCode className="text-white text-2xl" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Tools and technologies I use to build amazing products
      </p>
    </div>

    {/* Skills Grid */}
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => {
          const Icon = getIconComponent(skill.icon);

          // Determine color based on skill type or level
          const getColorClass = () => {
            if (skill.level > 80) return "from-green-500 to-emerald-500";
            if (skill.level > 60) return "from-blue-500 to-cyan-500";
            if (skill.level > 40) return "from-purple-500 to-pink-500";
            return "from-gray-500 to-gray-700";
          };

          return (
            <div
              key={skill.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100">
                {/* Icon Container */}
                <div className={`relative w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${getColorClass()} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
                  <Icon className="text-white relative z-10" size={24} />
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-blue-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full border-2 border-purple-500"></div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                {/* Level Indicator */}
                {skill.level && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Expertise</span>
                      <span className="font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getColorClass()} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
            </div>
          );
        })}
      </div>

      {/* Categories Legend */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Advanced (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Proficient (60-80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Intermediate (40-60%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
            <span className="text-sm text-gray-600">Learning</span>
          </div>
        </div>
      </div>

      
    </div>
  </section>
);

// Default icon mapping function
export const getDefaultIcon = (iconName) => {
  const iconMap = {
    'react': FaCode,
    'fire': FaFire,
    'tools': FaTools,
    'database': FaDatabase,
    'design': FaPalette,
    'server': FaServer,
    'mobile': FaMobileAlt,
    'cloud': FaCloud,
    'code': FaCode,
  };
  return iconMap[iconName?.toLowerCase()] || FaCode;
};

export default SkillsSection;
const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "10+", label: "Projects", icon: "🚀", color: "text-blue-600" },
          { value: "5+", label: "Certificates", icon: "🏆", color: "text-purple-600" },
          { value: "2+", label: "Years Experience", icon: "⏳", color: "text-green-600" },
          { value: "100%", label: "Satisfaction", icon: "❤️", color: "text-pink-600" },
        ].map((stat, index) => (
          <div key={index} className="space-y-3">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

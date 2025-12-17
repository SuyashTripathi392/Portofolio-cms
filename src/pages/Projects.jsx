import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        if (res.data?.success && Array.isArray(res.data.data)) {
          setProjects(res.data.data);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("Projects fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const getCategories = () => {
    const categories = new Set();
    projects.forEach(project => {
      if (Array.isArray(project.tech_stack)) {
        project.tech_stack.forEach(tech => categories.add(tech));
      }
    });
    return ["all", ...Array.from(categories)];
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tech_stack?.includes(filter)
      );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent works and projects
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {getCategories().map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🚧</div>
          <p className="text-gray-400 text-xl">No projects found in this category</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-56">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <FaStar className="text-4xl text-blue-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {Array.isArray(project.tech_stack) && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech_stack.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.tech_stack.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {project.date ? new Date(project.date).toLocaleDateString() : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
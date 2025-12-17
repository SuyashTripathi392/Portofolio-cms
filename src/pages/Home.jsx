import { useEffect, useState } from "react";
import { getAbout, getSkills } from "../api/api";
import * as FaIcons from "react-icons/fa";

import HeroSection from "../components/home/HeroSection.jsx";
import SkillsSection from "../components/home/SkillsSection.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import CTASection from "../components/home/CTASection.jsx";

const Home = () => {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const getIconComponent = (iconName) => {
    return FaIcons[iconName] || FaIcons.FaCode;
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const aboutRes = await getAbout();
        setAbout(aboutRes.data?.data || null);

        const skillsRes = await getSkills();
        setSkills(
          Array.isArray(skillsRes.data?.data) ? skillsRes.data.data : []
        );
      } catch (err) {
        console.error("Home fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroSection
        about={about}
        roles={roles}
        currentRole={currentRole}
      />

      <SkillsSection
        skills={skills}
        getIconComponent={getIconComponent}
      />

      <StatsSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default Home;

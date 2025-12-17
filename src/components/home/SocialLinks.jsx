import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => (
  <div className="flex gap-4">
    <a
      href="https://github.com/suyashtripathi-dev"
      className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"
    >
      <FaGithub size={20} />
    </a>

    <a
      href="https://www.linkedin.com/in/suyash-tripathi-dev"
      className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-700 hover:text-white transition-all hover:-translate-y-1"
    >
      <FaLinkedin size={20} />
    </a>
  </div>
);

export default SocialLinks;

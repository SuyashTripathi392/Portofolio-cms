import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 0,
});

/* ================= PUBLIC PORTFOLIO APIs ================= */

export const getAbout = () => api.get("/about");
export const getSkills = () => api.get("/skills");
export const getProjects = () => api.get("/projects");
export const getCertificates = () => api.get("/certificates");
export const getContactDetails = () => api.get("/contact-details");

export const sendContactMessage = (data) =>
  api.post("/contact", data);

export default api;

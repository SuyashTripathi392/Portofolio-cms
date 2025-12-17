import { useState, useEffect } from "react";
import { getContactDetails, sendContactMessage } from "../api/api";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    location: ""
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getContactDetails()
      .then((res) => {
        if (res.data?.contact) setContact(res.data.contact);
      })
      .catch((err) => toast.error("Failed to fetch contact details"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendContactMessage(form);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: "Email", value: contact.email },
    { icon: <FaPhone />, label: "Phone", value: contact.phone },
    { icon: <FaMapMarkerAlt />, label: "Location", value: contact.location },
    { icon: <FaGithub />, label: "GitHub", value: contact.github, isLink: true },
    { icon: <FaLinkedin />, label: "LinkedIn", value: contact.linkedin, isLink: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                item.value && (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      {item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend Support</span>
                  <span className="font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-gray-600 mt-2">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
          <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you as soon as possible</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
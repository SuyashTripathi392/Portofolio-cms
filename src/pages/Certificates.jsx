import { useEffect, useState } from "react";
import { getCertificates } from "../api/api";
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await getCertificates();
        if (res.data?.success && Array.isArray(res.data.certificates)) {
          setCertificates(res.data.certificates);
        } else {
          setCertificates([]);
        }
      } catch (err) {
        console.error("Certificates fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

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
          <FaCertificate className="inline mr-3 text-blue-600" />
          Certifications & <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional certifications and achievements that validate my skills
        </p>
      </div>

      {certificates.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📜</div>
          <p className="text-gray-400 text-xl">No certificates found</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <FaCertificate className="text-2xl text-green-600" />
                  </div>
                  {cert.credential_url && (
                    <a
                      href={cert.credential_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <span className="font-medium">Issued by:</span>
                  <span className="font-semibold text-blue-600">{cert.issuer}</span>
                </div>

                {cert.issue_date && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FaCalendarAlt />
                    <span>Issued: {new Date(cert.issue_date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                )}

                {/* Skills */}
                {Array.isArray(cert.skills) && cert.skills.length > 0 && (
                  <>
                    <p className="text-sm font-medium text-gray-700 mb-2">Skills Gained:</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </>
                )}

                {/* Credential Link */}
                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    View Credential
                  </a>
                )}
              </div>

              {/* Certificate Image (on hover) */}
              {cert.image_url && (
                <div className="relative overflow-hidden h-0 group-hover:h-60 transition-all duration-500">
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certificates;
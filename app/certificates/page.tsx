"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certificates } from "@/lib/certificates";
import { Award, FileText, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter((cert) => {
    const matchesFilter = filter === "all" || cert.type === filter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const selectedCert = certificates.find((cert) => cert.id === selectedCertificate);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "license":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "registration":
        return "bg-green-100 text-green-700 border-green-200";
      case "tax":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "license":
        return <Shield className="w-4 h-4" />;
      case "registration":
        return <FileText className="w-4 h-4" />;
      case "tax":
        return <Award className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCertificate(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Licenses & Certificates
            </h1>
          </div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredCertificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                onClick={() => setSelectedCertificate(certificate.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={certificate.imageUrl || "/certificate/placeholder.jpg"}
                    alt={certificate.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <Button className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full group-hover:shadow-lg transition-all">
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No certificates found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn transition-opacity duration-300"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
              <h2 className="text-2xl font-bold text-gray-900">Document</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCertificate(null)}
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Show image or PDF */}
              {selectedCert.docUrl && selectedCert.docUrl.endsWith(".pdf") ? (
                <iframe
                  src={`${selectedCert.docUrl}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-[80vh] rounded-2xl border"
                  loading="lazy"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups"
                />
              ) : (
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <Image
                    src={selectedCert.imageUrl || "/certificate/placeholder.jpg"}
                    fill
                    alt="certificate"
                    className="object-contain"
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}

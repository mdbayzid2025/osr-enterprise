"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certificates } from "@/lib/certificates";
import { Award, Calendar, FileText, Shield, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import certificateImg1 from "../../app/public/certificate/cert3.jpeg";
import certificateImg2 from "../../app/public/certificate/cert4.jpeg";
import certificateImg3 from "../../app/public/certificate/cert6.jpeg";
import Image from "next/image";

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter((cert) => {
    const matchesFilter = filter === "all" || cert.type === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl mb-6 shadow-lg">
              <Award className="w-12 h-12 text-white" /> 
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Licenses & Certificates
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our organization is certified and licensed by government authorities. View our official
              credentials and achievements.
            </p>
          </div>

          {/* <div className="mb-12 space-y-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search certificates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-2xl border-2 focus:border-teal-500 text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={`rounded-full px-6 ${
                  filter === "all"
                    ? "bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600"
                    : ""
                }`}
              >
                All Certificates
              </Button>
              <Button
                variant={filter === "license" ? "default" : "outline"}
                onClick={() => setFilter("license")}
                className={`rounded-full px-6 ${
                  filter === "license"
                    ? "bg-gradient-to-r from-blue-400 to-blue-600"
                    : ""
                }`}
              >
                <Shield className="w-4 h-4 mr-2" />
                Licenses
              </Button>
              <Button
                variant={filter === "registration" ? "default" : "outline"}
                onClick={() => setFilter("registration")}
                className={`rounded-full px-6 ${
                  filter === "registration"
                    ? "bg-gradient-to-r from-green-400 to-green-600"
                    : ""
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Registrations
              </Button>
              <Button
                variant={filter === "tax" ? "default" : "outline"}
                onClick={() => setFilter("tax")}
                className={`rounded-full px-6 ${
                  filter === "tax"
                    ? "bg-gradient-to-r from-amber-400 to-amber-600"
                    : ""
                }`}
              >
                <Award className="w-4 h-4 mr-2" />
                Tax Certificates
              </Button>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredCertificates?.map((certificate, index) => (
              <div
                key={certificate.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onClick={() => setSelectedCertificate(certificate.id)}
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div> */}
                  <div className="absolute inset-0 flex items-center justify-center text-9xl  group-hover:scale-110 transition-transform duration-500">
                    <Image src={certificate?.imageUrl} fill  alt="certificate"/>
                    {/* <Image src={certificateImg2} fill  alt="certificate"/> */}
                  </div>
                  {/* <div className="absolute top-4 right-4 z-20">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold border-2 backdrop-blur-sm flex items-center gap-2 ${getTypeColor(certificate.type)}`}>
                      {getTypeIcon(certificate.type)}
                      {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
                    </div>
                  </div> */}
                </div>

                <div className="p-6 space-y-4">
                  {/* <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{certificate.issuer}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{certificate.issueDate}</span>
                  </div> */}

                  {/* <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Certificate No.</span>
                      <span className="text-sm font-mono font-semibold text-gray-900">
                        {certificate.certificateNumber}
                      </span>
                    </div>
                  </div> */}

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
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No certificates found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
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
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl  flex items-center justify-center">
                {/* <div className="text-9xl">📜</div> */}
                <Image src={selectedCert?.imageUrl} fill alt="certficate"/>
              </div>

              <div className="hidden space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className={`p-3 rounded-lg ${getTypeColor(selectedCert.type)}`}>
                    {getTypeIcon(selectedCert.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Certificate Type</h4>
                    <p className="text-gray-600 capitalize">{selectedCert.type}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-1">Issuer</h4>
                    <p className="text-gray-600">{selectedCert.issuer}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-1">Issue Date</h4>
                    <p className="text-gray-600">{selectedCert.issueDate}</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Certificate Number</h4>
                  <p className="text-gray-600 font-mono">{selectedCert.certificateNumber}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

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
          animation: fadeIn 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

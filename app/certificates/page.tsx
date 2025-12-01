"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { msdsBanglaDocs, msdsEnglishDocs } from "@/lib/certificates";

type Language = "english" | "bangla";
type Certificate = {
 id?: string;
  title?: string;
  document?: string;
  image?: string;
};



export default function Certificate() {
  const [language, setLanguage] = useState<Language>("english");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const activeCertificates = language === "english" ? msdsEnglishDocs : msdsBanglaDocs;

  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Licenses & Certificates
          </h1>

          {/* Language Tabs */}
          <div className="flex justify-center gap-4 mb-14">
            {(["english", "bangla"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setSelectedCert(null);
                }}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-semibold transition",
                  language === lang
                    ? "bg-teal-500 text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}
              >
                {lang === "english" ? "English" : "Bangla"}
              </button>
            ))}
          </div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCertificates?.map((certificate, index) => (
              <div
                key={certificate?.id}
                onClick={() => setSelectedCert(certificate)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition"
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                  {certificate?.document?.endsWith(".pdf") ? (
                    // <iframe
                    //   src={`${certificate?.document}#toolbar=0`}
                    //   className="w-full h-full border-none"
                    // />

                     <embed

                      src={certificate?.document}

                      type="application/pdf"

                      className="w-full min-h-[70vh]"

                    />
                    
                  ) : (
                    <Image
                      src={certificate?.image || "/certificate/placeholder.jpg"}
                      alt={certificate?.title || "Certificate"}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  )}
                </div>

                <div className="p-6">
                  <Button className="w-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {activeCertificates?.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              No certificates available.
            </p>
          )}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold">
                {selectedCert?.title || "Document Preview"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCert(null)}
              >
                <X />
              </Button>
            </div>

{/* <iframe
                  src={selectedCert.document}
                  className="w-full h-[80vh] rounded-xl border"
                /> */}
            <div className="p-6">
              {selectedCert?.document?.endsWith(".pdf") ? (
                // <iframe
                //   src={`${selectedCert?.document}#toolbar=0&view=FitH`}
                //   className="w-full h-[80vh] rounded-xl border"
                // />
                 <embed

                      src={selectedCert?.document}

                      type="application/pdf"

                      className="w-full min-h-[70vh]"

                    />
              ) : (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={selectedCert?.image || "/certificate/placeholder.jpg"}
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
      `}</style>
    </div>
  );
}

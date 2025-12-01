"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { msdsEnglishDocs } from "@/lib/certificates";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Certificate = {
  id: string;
  title?: string;
  image?: string;
  document?: string;
};

export default function CertificatesCom() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // ESC close
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
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-16">
            Licenses & Certificates
          </h1>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {msdsEnglishDocs?.map((certificate:any, index) => (
              <div
                key={certificate.id}
                className="group bg-black/70 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition"
                style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
                onClick={() => setSelectedCert(certificate)}
              >
                <div className="relative aspect-[3/4] bg-black/50">
                  {certificate.document?.endsWith(".pdf") ? (
                    <iframe
                      src={`${certificate.document}#toolbar=0&view=FitH`}
                      className="w-full h-full"
                    />
                  ) : (
                    <Image
                      src={certificate.image || "/certificate/placeholder.jpg"}
                      alt={certificate.title || "Certificate"}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  )}
                </div>

                <div className="p-6">
                  <Button className="w-full rounded-full">
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-2 md:px-6 py-4 border-b">
              <h2 className="text-xl font-bold">Document Preview</h2>
              <Button variant="ghost" size="icon" onClick={() => setSelectedCert(null)}>
                <X />
              </Button>
            </div>

            <div className="p-2 md:p-6">
              {selectedCert?.document?.endsWith(".pdf") ? (
                <iframe
                  src={selectedCert?.document}
                  className="w-full h-[80vh] rounded-xl border"
                />
              ) : (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={selectedCert?.image || "/certificate/placeholder.jpg"}
                    alt="certificate"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

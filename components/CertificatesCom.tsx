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
            {msdsEnglishDocs?.map((certificate: any, index) => (
              <div
                key={certificate.id}
                className="group  rounded-xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition"
                style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
                onClick={() => setSelectedCert(certificate)}
              >
                <div className="relative aspect-[3/4] bg-black/50">
                  <Image
                    src={certificate?.thumbnail || "/certificate/placeholder.jpg"}
                    alt={certificate?.title || "Certificate"}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <a href={certificate?.document} target="_black"><Button className="w-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
                    Preview
                  </Button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>   
    </div>
  );
}

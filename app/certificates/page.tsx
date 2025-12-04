"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(
  () => import("@/components/PdfViewer"),
  { ssr: false }
);

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

  const activeCertificates = language === "english" ? msdsEnglishDocs : msdsBanglaDocs;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* CONTENT */}
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

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCertificates && activeCertificates?.map((certificate, index) => (
              <div
                key={certificate?.id}                
                className="group bg-white rounded-3xl overflow-hidden border hover:shadow-lg cursor-pointer hover:-translate-y-2 transition"
                style={{ animation: `slideUp 0.5s ease-out ${index * 0.08}s both` }}
              >
                 <div className="relative aspect-[3/4] bg-gray-100">                 
                    <Image
                      src={certificate?.thumbnail || "/certificate/placeholder.jpg"}
                      alt={certificate?.title || "Certificate"}
                      fill
                      className="object-cover  transition"
                    />
                </div>
                  


                <div className="p-6 bg-slate-200">
                  <a href={certificate?.document} target="_black"><Button className="w-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
                    Preview
                  </Button></a>
                </div>
              </div>
            ))}
          </div>

          {activeCertificates.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              No certificates available.
            </p>
          )}
        </div>
      </div>
      <Footer />

      {/* Animation */}
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

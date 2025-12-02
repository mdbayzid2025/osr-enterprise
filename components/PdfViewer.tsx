"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut } from "lucide-react";

// Load worker from CDN (avoids Webpack bundling issues)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type PdfViewerProps = {
  fileUrl: string;
};

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState(1.1);

  if (!fileUrl) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Zoom controls */}
      <div className="flex gap-3 mb-4">
        <Button onClick={() => setScale(s => s - 0.1)}>Zoom Out</Button>
        <Button onClick={() => setScale(s => s + 0.1)}>Zoom In</Button>
      </div>

      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="text-gray-500">Loading PDF...</p>}
        error={<p className="text-red-500">Failed to load PDF</p>}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            scale={scale}
            className="shadow-md mb-6"
          />
        ))}
      </Document>
    </div>
  );
}

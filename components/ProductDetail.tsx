"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function ProductDetail({ productId }: { productId: string }) {
  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedTab, setSelectedTab] = useState("description");

  const relatedProducts = products.filter((p) => p.id !== productId).slice(0, 4);

  // 🖱️ Zoom state
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* 🖼️ Image with Zoom */}
            <div>
              <div
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div
                  className="relative aspect-square border rounded-2xl overflow-hidden cursor-zoom-in"
                  onMouseEnter={() => setZoom(true)}
                  onMouseLeave={() => setZoom(false)}
                  onMouseMove={handleMouseMove}
                >
                  <img
                    src="/product1 (1).jpg"
                    alt={product.name}
                    className={`object-contain w-full h-full transition-transform duration-300 ${zoom ? "scale-150 cursor-zoom-out" : "scale-100"
                      }`}
                    style={
                      zoom
                        ? {
                          transformOrigin: `${position.x}% ${position.y}%`,
                        }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:pt-6">
              <h1 className="text-lg font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-blue-700 text-2xl font-semibold leading-relaxed mb-6 text-justify">
                {product.description}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-3 text-justify">
                <strong className="text-purple-700">Use:</strong>{" "}
                {product.usingInstruction || product.longDescription}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-justify">
                <strong className="text-purple-700">Warning:</strong>{" "}
                {product.warningEnglish}
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                <strong className="text-purple-700">ব্যবহার:</strong>{" "}
                {product.usingBangla}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                <strong className="text-purple-700">সতর্কতাঃ :</strong>{" "}
                {product.warningBangla}
              </p>

              <p className="text-red-600 text-right text-sm font-medium mt-4">
                আগুন থেকে দূরে রাখুন।
              </p>
              <div className="border-t mt-3 pt-5 flex items-center gap-3">
                Category:{" "}
                <span className="text-blue-600">{product.category || "Chemical"}</span>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 nd:gap-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src="/product1 (1).jpg"
                      alt={related.name}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl text-center font-bold text-gray-900">
                      {related.name}                                            </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

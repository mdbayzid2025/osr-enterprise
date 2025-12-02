"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import RelatedProducts from "./RelatedProducts";

// Add a type definition for clarity, even if products is imported as 'any[]'
export interface Product {
  id: number;
  Product_Name: string;
  image: any; // Assuming 'img1' is imported here
  badge: any; // Assuming 'img1' is imported here
  Price: string;
  Weight: string;
  Category: string;
  Description: string;
  useEng: string;
  use_Bangla: string;
  warning_English: string;
  Warning_Bangla: string;
  descriptionBangla?: string;
  Storage?: string;
  Mfg_Date?: string;
  Exp_Date?: string;
}

export default function ProductDetail({ productId }: { productId: string }) {
  // Find the product by converting productId string to number
  const product = products.find((p: Product) => p?.id?.toString() === productId);
  
  // Fallback if product is not found (using products[0] is dangerous if products is empty)
  if (!product) {
      return (
          <div className="min-h-screen bg-gray-50">              
              <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
                  <p className="mt-4"><Link href="/">Go back to home</Link></p>
              </div>              
          </div>
      );
  }

  // State is not used in the rendering of tabs, so it can be omitted or updated to be used.
  // const [selectedTab, setSelectedTab] = useState("description");

  // Filter related products and slice to 4. Ensure comparison is between the same type (number vs number)
  const relatedProducts = products.filter((p: Product) => p.id !== product.id).slice(1, 10) as Product[];

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

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                  <Image
                  width={450}
                  height={350}
                    src={product?.image}
                    alt={product.Product_Name} // Use Product_Name
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
              <div className="">
                <Image src={product?.badge} width={400} height={300} className="w-2/3 h-[200px mx-auto mt-5" alt="badge"/>
              </div>
            </div>

            {/* Info */}
            <div className="md:pt-6">
              <h1 className="text-2xl font-bold text-red-800 mb-4">
                {product.Product_Name} {/* Use Product_Name */}
              </h1>

              <p className="text-blue-700 text-2xl font-semibold leading-relaxed mb-6 text-justify">
                {product.Description} {/* Use Description */}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-3 text-justify">
                <strong className="text-purple-700">Use:</strong>{" "}
                {product.useEng} {/* Use useEng, removing conditional keys like usingInstruction/longDescription */}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-justify">
                <strong className="text-purple-700">Warning:</strong>{" "}
                {product.warning_English} {/* Use warning_English */}
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                <strong className="text-purple-700">ব্যবহার:</strong>{" "}
                {product.use_Bangla} {/* Use use_Bangla */}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                <strong className="text-purple-700">সতর্কতাঃ :</strong>{" "}
                {product.Warning_Bangla} {/* Use Warning_Bangla */}
              </p>
              
              {/* Optional check for ISV (Product_Name: "ISV") to display the fire warning */}
              {(product.Product_Name === "ISV" || product.Product_Name === "SEAGATE-2" || product.Product_Name === "BTS") && (
                <p className="text-red-600 text-right text-sm font-medium mt-4">
                  আগুন থেকে দূরে রাখুন।
                </p>
              )}

              <div className="border-t mt-3 pt-5 flex items-center gap-3">
                Category:{" "}
                <span className="text-blue-600">{product.Category}</span> {/* Use Category */}
              </div>
              <div className="pt-3 flex items-center gap-3">
                Price:{" "}
                <span className="text-blue-600">{product.Price}</span> {/* Use Price */}
              </div>
              <div className="pt-3 flex items-center gap-3">
                Weight/Volume:{" "}
                <span className="text-blue-600">{product.Weight}</span> {/* Use Weight */}
              </div>
              
              {/* Add a button, since it's common for product detail pages */}
              <Button className="hidden mt-6 w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </div>
          </div>

          {/* Related Products */}
            <RelatedProducts relatedProducts={relatedProducts}/>
        </div>
      </div>      
    </div>
  );
}
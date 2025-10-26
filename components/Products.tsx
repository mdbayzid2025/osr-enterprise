"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "../app/public/drum1.jpg";
import img2 from "../app/public/drum2.png";
import img3 from "../app/public/drum3.png";
import img4 from "../app/public/drum4.png";
import img5 from "../app/public/drum5.jpg";
import Image from "next/image";



const products = [
  {
    id: 1,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img1,
  },
  {
    id: 2,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img2,
  },
  {
    id: 3,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img3,
  },
  {
    id: 4,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img4,
  },
  {
    id: 5,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img4,
  },
  {
    id: 6,
    name: "PVAc Emulsion, Master Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100.00,
    rating: 5,
    image: img1,
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Our Greatest Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Latest Products
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et mi volutpat, ultricies
            tortor ullamcorper, eleifend tortor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-8xl p-8 group-hover:scale-105 transition-transform duration-300">
                {/* {product?.image} */}
                <Image src={product?.image} className="!h-full !w-full object-cover" alt="image" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  {/* <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div> */}
                </div>
                {/* <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="icon"
                    className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full w-12 h-12 group-hover:scale-110 transition-transform"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group">
            Load More
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

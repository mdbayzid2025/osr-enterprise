"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";



const products = [
  {
    id: 1,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
  {
    id: 2,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
  {
    id: 3,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
  {
    id: 4,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
  {
    id: 5,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
  {
    id: 6,
    name: "Rustom",
    description: "প্রিন্টের দাগ, সিল প্যাডের কালি ও ধৌত রং অপসারণের জন্য ব্যবহার্য। দাগের উপর কয়েক ফোটা প্রিন্টন ফেলুন, ব্রাশ দিয়ে ঘষুন, পানির সাহায্যে টার্নিশ দিয়ে কচলিয়ে ভালভাবে ধুয়ে ফেলুন।",
    price: 100.00,
    rating: 5,
    image: "/product1 (1).jpg"
  },
];

export default function Products() {
  return (
    <section className="py-20" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>          
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative rounded-md overflow-hidden  hover:shadow-sm transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-square bg-gray-50 flex items-center justify-center text-8xl p-8  transition-transform duration-300">
                {/* {product?.image} */}
                <Image src={product?.image} fill className="object-contain" alt="image" />
              </div>             
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products"><Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group">
            View All
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button></Link>
        </div>
      </div>
    </section>
  );
}

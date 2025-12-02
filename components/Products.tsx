"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { products } from "@/lib/products";




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
          {products?.slice(0,6).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id.toString()}`}
              className=" pb-3 relative rounded-md overflow-hidden  hover:shadow-sm transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-square  flex items-center justify-center text-8xl p-8  transition-transform duration-300">
                {/* {product?.image} */}
                <Image src={product?.image} fill className="object-contain" alt="image" />                
              </div>             
              <h3 className="text-center mt-3 uppercase">{product?.Product_Name}</h3>
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

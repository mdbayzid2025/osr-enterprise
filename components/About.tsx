"use client";

import { ArrowRight, Beaker, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-800 rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
              </div>
              <div className="relative aspect-[4/5] flex items-center justify-center p-8">
                <div className="text-9xl opacity-80">🏭</div>
                <Image src="https://png.pngtree.com/png-vector/20250118/ourmid/pngtree-colorful-beaker-with-chemical-reactions-and-molecular-connections-showcasing-creativity-in-png-image_15263992.png" fill alt="img" className="  !object-contain  mx-auto"/>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-3">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Chemical Industries
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a vision to redefine innovation in the chemical industry, OSR Enterprise is a trusted name in the production and supply of high-quality industrial and specialty chemicals. With years of expertise, we focus on delivering sustainable, efficient, and cost-effective chemical solutions to clients across multiple sectors including manufacturing, agriculture, construction, and home care.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4 pb-10">
              At OSR Enterprise, we believe in combining science with responsibility. Our products are developed using eco-conscious processes that ensure safety, performance, and environmental protection. Backed by modern technology, a skilled R&D team, and a customer-first approach, we continuously strive to exceed expectations through reliability and innovation.
            </p>           

            <Link href="/certificates"><Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

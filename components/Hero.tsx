"use client";

import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
// import img from "../app/public/heroImg.png";
import img from "../app/public/8942092.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-60 w-40 h-40 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <Facebook className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <Twitter className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <Instagram className="w-5 h-5 text-white" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="text-white space-y-6">
            <p className="text-teal-300 text-sm font-medium tracking-wider uppercase">
              Welcome To
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Universal Polymer
              <span className="block text-teal-300">Industries Ltd</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Leading the Way Worldwide where with Exceptional Growth for Your Home since
              1992 we are leaders in eco-environmental methods our Mission to deliver the
              best quality products to our clients.
            </p>
            <Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group">
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-300 to-yellow-400 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-full border-4 border-white/30 flex items-center justify-center">
                    <div className="text-3xl">
                      <Image src={img} alt="Hero Image" height={300} width={300} className=" object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

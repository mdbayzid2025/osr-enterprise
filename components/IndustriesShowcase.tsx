"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndustriesShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div>
              <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Managed By
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Chemical Industries
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis tortor et erat
              ullamcorper, ut pellentesque ipsum cursus. Integer arcu sem lacus quis, efficitur elit.
              Aliquam vulputate venenatis est, a suscipit erat sollicitudin at. Sed ultrices
              hendrerit eleifend. Donec vitae vestibulum leo. Pellentesque molestie mollis felis,
              Praesent Ullamcorper purus, Adipiscing Iaculis, Luctus Id, Interdum Consectetuer tortor.
            </p>

            <Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  🏭
                </div>
              </div>
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

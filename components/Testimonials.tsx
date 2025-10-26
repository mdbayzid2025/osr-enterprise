"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Title Here",
    role: "Designation",
    content: "Lorem ipsum sit Strong Dummy Text of the printing and typesetting Industry. Typesetting Industry. Lorem ipsum Industry's Standard Dummy Text Ever Since the 1500s.",
    avatar: "👤",
  },
  {
    id: 2,
    name: "Title Here",
    role: "Designation",
    content: "Lorem ipsum sit Strong Dummy Text of the printing and typesetting Industry. Typesetting Industry. Lorem ipsum Industry's Standard Dummy Text Ever Since the 1500s.",
    avatar: "👤",
    featured: true,
  },
  {
    id: 3,
    name: "Title Here",
    role: "Designation",
    content: "Lorem ipsum sit Strong Dummy Text of the printing and typesetting Industry. Typesetting Industry. Lorem ipsum Industry's Standard Dummy Text Ever Since the 1500s.",
    avatar: "👤",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="text-[20rem]">💊</div>
      </div>

      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5">
        <div className="text-[16rem]">🧪</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Our Big Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Customer Says About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                testimonial.featured
                  ? "bg-gradient-to-br from-teal-400 to-cyan-500 text-white scale-105 shadow-2xl"
                  : "bg-gray-50 text-gray-900 hover:shadow-lg"
              }`}
            >
              <Quote className={`w-12 h-12 mb-6 ${testimonial.featured ? "text-white/80" : "text-teal-400"}`} />
              <p className={`text-lg leading-relaxed mb-8 ${testimonial.featured ? "text-white" : "text-gray-700"}`}>
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${testimonial.featured ? "text-white" : "text-gray-900"}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${testimonial.featured ? "text-white/80" : "text-gray-600"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full w-12 h-12 border-2 hover:bg-teal-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-teal-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full w-12 h-12 border-2 hover:bg-teal-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

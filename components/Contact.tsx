"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="text-[20rem]">🔬</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Eiusmod Dolor Aute In Irure Anim Deserunt In fugiat Reprehenderit Esse Ullamco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-3 items-center ">
          {/* 🌍 Map Section */}
          <div className="relative order-2 md:order-1  !max-w-[90vw]  shadow-lg border border-gray-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.6814618220055!2d90.51752815913223!3d23.69555854986421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b700331975cb%3A0x4f2b3fbc4ae1bee0!2sShiddirgonj%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1761585986897!5m2!1sen!2sbd" width="100%"  height="530" style={{border: 'none'}} loading="lazy" ></iframe>            
          </div>

          {/* 📩 Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 w-full shadow-xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+880 1XXXXXXXXX"
                    className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="www.example.com"
                    className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Your message here..."
                  className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg group"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

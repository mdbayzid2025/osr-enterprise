"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900">Universal Polymer</span>
              <span className="text-xs text-gray-500">Industries Ltd</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-teal-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">
              About
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">
              Our Products
            </Link>
            <Link href="/certificates" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">
              Certificates
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-teal-500 font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full px-6">
              Search
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-900 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-gray-600 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#products"
              className="block text-gray-600 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link
              href="/certificates"
              className="block text-gray-600 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certificates
            </Link>
            <Link
              href="#gallery"
              className="block text-gray-600 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:text-teal-500 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full">
              Search
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

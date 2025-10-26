"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Minus, Plus, Check, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function ProductDetail({ productId }: { productId: string }) {
  const product = products.find(p => p.id === productId) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center text-9xl">
                  {product.image}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-teal-600 font-semibold mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-semibold">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-xl">
                    ${(product.price * 1.3).toFixed(2)}
                  </span>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save 23%
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">Quantity:</span>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={decrementQuantity}
                        className="h-8 w-8 rounded-full hover:bg-white"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={incrementQuantity}
                        className="h-8 w-8 rounded-full hover:bg-white"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full py-6 text-lg">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 rounded-full border-2 hover:bg-gray-50"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Truck className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Free Shipping</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Shield className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Quality Guarantee</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <RefreshCw className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">30 Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-8">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent px-6 py-4"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent px-6 py-4"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent px-6 py-4"
                >
                  Specifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-0">
                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-0">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center text-8xl p-8 group-hover:scale-105 transition-transform duration-300">
                    {relatedProduct.image}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{relatedProduct.name}</h3>
                      <div className="flex gap-0.5">
                        {[...Array(relatedProduct.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <Button
                        size="icon"
                        className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full w-12 h-12"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

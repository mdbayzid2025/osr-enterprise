import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24' >
            <h1 className='text-center text-3xl font-semibold text-slate-900 mb-7'>Products List</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* // 🚨 CORRECTION: products array now uses 'id' and 'Product_Name'. 
                  // It is assumed the `products` import from '@/lib/products' contains the JSON array we finalized.
                */}
                {products?.map((product) => (
                    <Link
                        // Use product?.id from the finalized JSON structure
                        key={product?.id}
                        href={`/products/${product?.id}`}
                        className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-square  flex items-center justify-center overflow-hidden">
                            {/* Assuming a static placeholder image for now */}
                            <img
                                src={product?.image}
                                // Use product?.Product_Name from the finalized JSON structure for alt text
                                alt={product?.Product_Name}
                                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            {/* Subtle overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content Section */}
                        <div className="p-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {/* Use product?.Product_Name from the finalized JSON structure */}
                                {product?.Product_Name}
                            </h3>

                            {/* --- ENHANCEMENT: Display Price and Weight --- */}
                            <div className="flex justify-center space-x-4 mb-3">
                                <p className="text-green-600 font-bold text-base">
                                    {product?.Price}
                                </p>                               
                            </div>
                            {/* ------------------------------------------- */}

                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                {/* Use product?.Description from the finalized JSON structure, or a Bangla fallback */}
                                {product?.Description || product?.Description_Bangla || "Premium quality product for industrial and home use."}
                            </p>

                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-full px-5"
                            >
                                View Details
                            </Button>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default page
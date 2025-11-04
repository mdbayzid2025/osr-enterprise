import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24'  >
            <h1 className='text-center text-3xl font-semibold text-slate-900 mb-7'>Products List</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="group  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                            <img
                                src="/product1 (1).jpg"
                                alt={product.name}
                                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            {/* Subtle overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content Section */}
                        <div className="p-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                {product.description || "Premium quality product for industrial and home use."}
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
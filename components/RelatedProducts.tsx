import Link from 'next/link';
import React from 'react'
import { Product } from './ProductDetail';
import Image from 'next/image';

// Add a type definition for clarity, even if products is imported as 'any[]'



const RelatedProducts = ({ relatedProducts }: { relatedProducts: Product[] }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Products
            </h2>
            {/* @ts-ignore */}
            <div className="overflow-hidden relative w-full">
                <div
                    className="flex gap-5 whitespace-nowrap animate-marquee"
                    onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                    onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
                >
                    {/* Duplicate products for seamless scrolling */}
                    {[...relatedProducts, ...relatedProducts].map((related, idx) => (
                        <Link
                            key={related.id + "-" + idx}
                            href={`/products/${related.id}`}
                            className="min-w-[350px] md:min-w-[300px] border overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 group"
                        >
                            <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                                <Image
                                    width={300}
                                    height={200}
                                    src={related.image}
                                    alt={related.Product_Name}
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl text-center font-bold text-gray-900">
                                    {related.Product_Name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
            )
}

            export default RelatedProducts
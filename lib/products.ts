export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  inStock: boolean;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

import img1 from "../public/images/product1.jpg";
import img1img1 from "../public/images/product2.jpg";
import img3 from "../public/images/product3.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium PET Resin Bottles",
    description: "High-quality bottle grade PET resin perfect for beverage and liquid packaging",
    longDescription: "Our premium PET resin bottles are manufactured using state-of-the-art technology and eco-friendly processes. These bottles offer excellent clarity, durability, and barrier properties, making them ideal for beverages, water, juices, and other liquid products. Made from 100% recyclable materials, they meet international food safety standards.",
    price: 100.00,
    rating: 5,
    reviewCount: 42,
    image: '../public/drum1.jpg',
    category: "PET Bottles",
    inStock: true,
    features: [
      "100% recyclable material",
      "FDA approved for food contact",
      "Excellent clarity and transparency",
      "High impact resistance",
      "Moisture barrier properties",
      "Temperature resistant"
    ],
    specifications: {
      material: "PET (Polyethylene Terephthalate)",
      capacity: "500ml - 2L",
      weight: "15-45g",
      color: "Clear/Transparent",
      closure: "Standard cap compatible",
      certification: "FDA, ISO 9001:2015"
    }
  },
  {
    id: "2",
    name: "Industrial Cleaning Solution",
    description: "Professional-grade cleaning solution for industrial applications",
    longDescription: "Our industrial cleaning solution is specially formulated for heavy-duty cleaning in manufacturing facilities, chemical plants, and industrial environments. It effectively removes grease, oil, and stubborn stains while being safe for various surfaces.",
    price: 100.00,
    rating: 5,
    reviewCount: 38,
    image: '../public/drum2.jpg',
    category: "Chemicals",
    inStock: true,
    features: [
      "Heavy-duty cleaning power",
      "Biodegradable formula",
      "Safe for multiple surfaces",
      "Cost-effective solution",
      "Pleasant fragrance",
      "Quick action formula"
    ],
    specifications: {
      type: "Industrial Cleaner",
      volume: "5L",
      pH: "7.5-8.5",
      concentration: "Ready to use",
      storage: "Cool, dry place",
      shelfLife: "24 months"
    }
  },
  {
    id: "3",
    name: "Laboratory Grade Chemical",
    description: "High-purity chemical for research and laboratory applications",
    longDescription: "This laboratory grade chemical meets the highest purity standards required for scientific research, quality control, and analytical testing. Manufactured under strict quality control procedures to ensure consistency and reliability.",
    price: 100.00,
    rating: 5,
    reviewCount: 29,
    image: '../public/drum1.jpg',
    category: "Laboratory",
    inStock: true,
    features: [
      "99.9% purity guaranteed",
      "Batch tested and certified",
      "Traceable documentation",
      "Sealed packaging",
      "Quality assured",
      "Research grade"
    ],
    specifications: {
      purity: "≥99.9%",
      grade: "ACS Reagent",
      packaging: "Glass bottle",
      quantity: "500g",
      storage: "Room temperature",
      cas: "Available on request"
    }
  }
];

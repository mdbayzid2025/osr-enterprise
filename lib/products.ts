export interface Product {
  id: string;
  name: string;
  usingInstruction: string;
  usingBangla: string;
  warningEnglish: string;
  warningBangla: string;
  
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


export const products: any[] = [
  {
    id: "1",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Some drop of “MARKSILL-PLUS” on the spot then rub by hand or soft brush and wash with TARNISH.",
    usingBangla: "“MARKSILL-PLUS” এর কয়েক ফোঁটা দাগের উপর ফেলুন, হাত বা নরম ব্রাশ দিয়ে ঘষুন এবং TARNISH দিয়ে ধুয়ে ফেলুন।",
    warningBangla: "যে কোন কাপড়ের উপর ব্যবহার করবেন না যা পানি বা থিনারের দ্বারা ক্ষতিগ্রস্ত হতে পারে। প্রয়োজন হলে রাবার হ্যান্ড গ্লাভস ব্যবহার করুন এবং সাদা ও রঙিন প্রিন্টেড কাপড় আলাদাভাবে ধুয়ে ফেলুন।",
    warningEnglish: "Do not use on any fabrics that can be damaged by water or thinner. Use rubber hand gloves, if necessary separately wash white & dyed printed clothes.",
    image: "../public/product1 (1).jpg",
    category: "PET Bottles"
  },
  {
    id: "2",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Apply few drops of 'MARKSILL-PLUS', gently rub, then rinse thoroughly with clean water.",
    usingBangla: "‘MARKSILL-PLUS’ এর কয়েক ফোঁটা দিন, আলতোভাবে ঘষুন, তারপর পরিষ্কার পানি দিয়ে ধুয়ে ফেলুন।",
    warningBangla: "প্লাস্টিকের পৃষ্ঠে দীর্ঘক্ষণ রাখবেন না। প্রয়োজনে গ্লাভস ব্যবহার করুন।",
    warningEnglish: "Do not leave on plastic surface for long. Use gloves if necessary.",
    image: "../public/product1 (2).jpg",
    category: "PET Jars"
  },
  {
    id: "3",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Spray directly on the area, wait 30 seconds, then wipe clean with dry cloth.",
    usingBangla: "দাগের উপর সরাসরি স্প্রে করুন, ৩০ সেকেন্ড অপেক্ষা করুন, তারপর শুকনো কাপড় দিয়ে মুছে ফেলুন।",
    warningBangla: "শিশুদের নাগালের বাইরে রাখুন এবং চোখে লাগলে সঙ্গে সঙ্গে পানি দিয়ে ধুয়ে ফেলুন।",
    warningEnglish: "Keep out of reach of children. If it contacts eyes, rinse immediately with water.",
    image: "../public/product1 (3).jpg",
    category: "Cleaning Products"
  },
  {
    id: "4",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Spray evenly on surface, let sit for 1 minute, and wipe with soft cloth.",
    usingBangla: "পৃষ্ঠে সমানভাবে স্প্রে করুন, ১ মিনিট অপেক্ষা করুন এবং নরম কাপড় দিয়ে মুছে ফেলুন।",
    warningBangla: "গরম পৃষ্ঠে ব্যবহার করবেন না। চোখ ও মুখ থেকে দূরে রাখুন।",
    warningEnglish: "Do not use on hot surfaces. Keep away from eyes and mouth.",
    image: "../public/product1 (4).jpg",
    category: "Household Cleaners"
  },
  {
    id: "5",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Put small amount on sponge, clean the area, then rinse with water.",
    usingBangla: "স্পঞ্জে অল্প পরিমাণ দিন, দাগ পরিষ্কার করুন এবং পরে পানি দিয়ে ধুয়ে ফেলুন।",
    warningBangla: "রঙিন প্লাস্টিক বা পালিশ করা পৃষ্ঠে দীর্ঘ সময় রাখবেন না।",
    warningEnglish: "Avoid leaving on colored or polished plastic surfaces for long time.",
    image: "../public/product1 (5).jpg",
    category: "Plastic Care"
  },
  {
    id: "6",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Apply a few drops directly on stain, rub lightly, then rinse with cold water.",
    usingBangla: "দাগের উপর কয়েক ফোঁটা দিন, আলতোভাবে ঘষুন এবং ঠান্ডা পানি দিয়ে ধুয়ে ফেলুন।",
    warningBangla: "রেশম বা উলের কাপড়ে ব্যবহার করবেন না। ব্যবহারের আগে ছোট জায়গায় পরীক্ষা করুন।",
    warningEnglish: "Do not use on silk or wool fabrics. Test on a small area before use.",
    image: "../public/product1 (6).jpg",
    category: "Fabric Care"
  },
  {
    id: "7",
    name: "মার্কসিল (MARKSIL)",
    description: "USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    usingInstruction: "Spray directly and wipe with microfiber cloth for a glossy finish.",
    usingBangla: "সরাসরি স্প্রে করুন এবং মাইক্রোফাইবার কাপড় দিয়ে মুছে ফেলুন উজ্জ্বল ফিনিশের জন্য।",
    warningBangla: "গ্লাস বা স্টিয়ারিং হুইলে ব্যবহার করবেন না। গাড়ির অভ্যন্তরে বায়ু চলাচল নিশ্চিত করুন।",
    warningEnglish: "Do not use on glass or steering wheel. Ensure proper ventilation inside car.",
    image: "../public/product1 (7).jpg",
    category: "Automotive Care"
  }
]

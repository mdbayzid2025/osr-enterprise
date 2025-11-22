interface IProduct {
  Product_Name: string;
  Price: string;
  Weight: string;
  Category?: string;
  Use_Bangla?: string;
  Warning_Bangla?: string;
  Description_Bangla?: string;
  Instruction?: string;
}

const img1 = "/product1 (1).jpg"
  export const products: any[] = [
  {
    "id": 1,
    "Product_Name": "S. Rival (এস. রিভাল)",  
    "image": img1,
    "Price": "570 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Description": "For MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT and WET WASHING SPOT.",
    "useEng": "Some drop of “S.Rival” on the spot then rub by hand or soft brush and wash with Spot Vanish Cream. Apply two or three drops.",
    "use_Bangla": "মার্কার পেন, সিল্ক প্যাড, কালো কালি, কাপড়ের ফাল্ট, পোষা প্রাণীর দাগ এবং ভেজা ধোয়ার দাগের জন্য ব্যবহার্য। এটি কঠিন দাগ দূর করে।",
    "warning_English" : "Do not use on any fabrics that can be damaged by water or thinner. Use rubber hand gloves, if necessary separately wash white & dyed printed clothes.",

    "Warning_Bangla": "পানি ও থিনার (thinner) যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। প্রয়োজনে হ্যান্ড গ্লাভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "id": 2,
    "Product_Name": "SEAGATE-2",
    "image": img1,
    "Price": "630 Tk",
    "Weight": "1 Liter (782 gm) net weight per bottle when packed.",
    "Category": "Chemical",
    "Description": "Seagate-2 is very effective to erase the oily spot from the fabrics in dry condition. It is liquid & flammable. Do not use plastic, rubberized fabrics or leather.",
    "descriptionBangla": "ইহা কাপড় থেকে  তৈলসহ গ্রীস এবং আঠাকলা জাতীয় পদার্থ দূর করে।",
    "useEng": "Load the Seagate-2 into spray gun, spray or put adequate on the spot area, dry it rubbing with hand, same to fabrics or vacuum off. If necessary repeat the process.",
    "use_Bangla": "স্প্রেগান ভরে দাগের উপর প্রয়োজনমত স্প্রে করুন, হাত দিয়ে কচলিয়ে বা সমজাতীয় কাপড় দিয়ে ঘষুন অথবা বাতাসের মাধ্যমে শুকিয়ে নিন।",
    "warning_English": "Keep away from fire and children. Vapor harmful. Do not breath spray particles. Use with adequate Ventilation. Faces shield and approved cloths should be used. In case of contact, With eyes, if should use with clean water for 15 minutes and see a doctor as soon as possible. Do not use plastic, rubberized fabrics or leather.",
    "Warning_Bangla": "আগুণ ও শিশুদের নাগালের বাইরে রাখুন। প্লাস্টিক বা রাবার জাতীয় কাপড়ে ব্যবহার করবেন না। প্রয়োজনীয় বায়ু চলাচল স্থানে ব্যবহার করুন। ব্যবহারের সময় চোখে লাগলে পরিষ্কার পানি দিয়ে ১৫ মিনিট ধৌত করুন, দ্রুত ডাক্তারের শরণাপন্ন হউন।"
  },
  {
    "id": 3,
    "Product_Name": "R-1",
    "image": img1,
    "Price": "340 Tk",
    "Weight": "250 gm",
    "Category": "Chemical",
    "Description": "R-1 is a modern and international standard chemical. This chemical is applicable for knit, woven and sweater factory's rust and normal spot removing.",
    "useEng": "Put the some drop of R-1 in the spot, then rub with brush, wash well in the clean water rubbing with Spot Vanish Cream. Necessary drop of chemical put on the spot and get wet. Then covered with the R-1 powder.",
    "use_Bangla": "আর-১ জং এর জন্য অত্যন্ত কার্যকর ও উপযুক্ত। কাদা মাটি ও আয়রনের ক্ষেত্রেও ব্যবহার্য। আর-১ স্পটে লাগান। তারপর হাত বা ব্রাশের সাহায্যে ঘষে পরিষ্কার পানিতে ধুয়ে নিন।",
    "Storage": "N/A",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Don’t Use R-1 in the cloth which is not usable by water and thinner.",
    "Warning_Bangla": "যে কাপড়গুলি জল এবং থিনার দ্বারা ব্যবহারযোগ্য নয়, সেই কাপড়ে R-1 ব্যবহার করবেন না।"
  },
  {
    "id": 4,
    "Product_Name": "BTS",
    "image": img1,
    "Price": "520 Tk",
    "Weight": "1 Liter (797 gm) net weight per bottle when packed.",
    "Category": "Chemical",
    "Description": "BTS is very effective to erase the oily spot from the fabrics in dry condition. It is liquid & flammable. Turmeric Spot on white fabric, stamp pads, Ink Colour leakage form stitch on from coloured fabric.",
    "useEng": "Load the BTS into spray gun, spray or put adequate on the spot area, dry it rubbing with hand, same to fabrics or vacuum off. If necessary repeat the process. Put a few drops on the spot and clear it up.",
    "use_Bangla": "এটি কাপড় থেকে তৈলাক্ত গ্রীস এবং আঠালো জাতীয় পদার্থ দূর করে। স্প্রেগান ভরে দাগের উপর প্রয়োজনমত স্প্রে করুন, হাত দিয়ে কচলিয়ে বা সমজাতীয় কাপড় দিয়ে ঘষুন অথবা বাতাসের মাধ্যমে শুকিয়ে নিন।",
    "Storage": "Keep the store at temperature less than 85° F (35°C).",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Keep away from fire and children. Vapor harmful. Do not breath spray particles. Use with adequate Ventilation. Faces shield and approved cloths should be used. In case of contact, With eyes, if should use with clean water for 15 minutes and see a doctor as soon as possible. Do not use plastic, rubberized fabrics or leather. For white and colour fabrics use.",
    "Warning_Bangla": "আগুণ ও শিশুদের নাগালের বাইরে রাখুন। প্লাস্টিক বা রাবার জাতীয় কাপড়ে ব্যবহার করবেন না। প্রয়োজনীয় বায়ু চলাচল স্থানে ব্যবহার করুন। ব্যবহারের সময় চোখে লাগলে পরিষ্কার পানি দিয়ে ১৫ মিনিট ধৌত করুন, দ্রুত ডাক্তারের শরণাপন্ন হউন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 5,
    "Product_Name": "Spot Vanish Cream",
    "image": img1,
    "Price": "340 Tk",
    "Weight": "N/A",
    "Category": "Cream",
    "Description": "N/A",
    "useEng": "Put the cloth on the plain table/Glass/Bowl/Bucket or any suitable place, Hold with your fingers. Use some spot vanish Crem and water on the spot. Rub by with the brush or hand and the clothes gently through spot vanish suds. Rinse well in clean water and dry the clothiers shade or sun.",
    "use_Bangla": "ব্যবহার: সমতল টেবিল/কাঁচ/বল বাড়ির মুখ/বালতির মুখ অথবা যে কোন সুবিধাজনক স্থানে কাপড়টি রাখুন, আঙ্গুল দিয়ে ধরুন। দাগের উপর অল্প পরিমাণ স্পট ভ্যানিশ ক্রিম রাখুন, অল্প পানি নিন, ব্রাশ অথবা হাত দ্বারা ঘষুন, স্পট ভ্যানিশ এর ফেনায় আলতোভাবে কচলিয়ে পরিষ্কার পানিতে ধুয়ে নিন। কাপড়গুলো ছায়ায় অথবা রোদে শুকিয়ে নিন।",
    "Storage": "Keep the store at normal temperature.",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Do not use in the fabric that does not permit uses of water and thinner. Use rubber hand gloves, if necessary. Separately wash white & dyed/printed clothes.",
    "Warning_Bangla": "সতর্কতা: পানি ও থিনার যে কাপড়ে ব্যবহারযোগ্য নয়, সে কাপড়ে স্পট ভ্যানিশ ব্যবহার করবেন না। প্রয়োজনে হ্যান্ড গ্লাভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 6,
    "Product_Name": "YELLOW PLUS",
    "image": img1,
    "Price": "590 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Description": "Usable for usable yellow spot from white cloth. It also use black ink, pad ink, sill pad and wash spot. Hard Spot Remover for General Colour Knit, Woven, Sweater Garments.",
    "useEng": "Keep some drop of YELLOW PLUS on the spot, rub with brush wash in the water, wash again with clean water by rubbing with the help Spot Vanish Cream. Apply two or three drops.",
    "use_Bangla": "হলুদ দাগ সাদা কাপড়ের দাগ উঠানোর জন্য এটি কার্যকর। এটি প্যাডের কালি, নীল প্যাড, কালো দাগ এবং ধোঁয়ার অন্য ধরনের দাগ দূর করে।",
    "Storage": "N/A",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Do not use in color fabrics. When you use Yellow plus must wash your colour cloth by fresh water.",
    "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না।"
    },
    {
    "id": 7,
    "Product_Name": "TSR",
    "image": img1,
    "Price": "290 Tk",
    "Weight": "250 ml",
    "Category": "Spot Remover/Rust and Head Spot Cleaner",
    "Description": "Usable for usable yellow spot from white cloth. It also use black ink, pad ink, sill pad and wash spot.",
    "useEng": "Put some drop of \"TSR\" on the spot then soft brush and wash with clean water. Keep some drop of TSR on the spot, rub with brush wash in the water, wash again with clean water by rubbing with the help spot vanish Crem.",
    "use_Bangla": "টি.এস.আর সাদা কাপড়ের দাগ ওঠানোর জন্য ইহা অনেক কার্যকরী। ইহা প্যাডের কালি, স্পিল প্যাড, কাল দাগ এবং ধৌত অমসৃৃতায় ব্যবহার্য। কয়েক ফোঁটা টি.এস.আর দাগের উপর ফেলুন, ব্রাশ দিয়ে ঘষুন এবং পানিতে ধুয়ে নিন। পুনরায় স্পট ভেনিশের সাহায্যে ঘষে বা কচলিয়ে ভালোভাবে পরিষ্কার পানিতে ধুয়ে নিন।",
    "Storage": "N/A",
    "Mfg_Date": "10-Feb-2025",
    "Exp_Date": "31-Jan-2028",
    "warning_English": "Do not use in color fabrics.",
    "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না।"
  },
  {
    "id": 8,
    "Product_Name": "HSV",
    "image": img1,
    "Price": "460 Tk",
    "Weight": "250 ml",
    "Category": "Hard Spot Remover",
    "Description": "Hard Spot Remover for General Colour Knit, Woven, Sweater Garments.",
    "useEng": "Apply two or three drops. HSV: Plasing clothsmoothly Sopt. After use C Plus R wash clothsmoothly by fresh water. Some drop of H.S.V on the spot then hand or soft brush rubby and water Spot Vanish Cream.",
    "use_Bangla": "দাগের উপর অল্প পরিমাণ এইচ.এস.ভি নিন, এরপর নরম ব্রাশ দিয়ে ঘষে স্পট ভ্যানিশ এর সাহায্যে পরিষ্কার পানিতে ধুয়ে নিন।",
    "Storage": "Keep in cool and dry place.",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "When you use HSV must wash your colour cloth by fresh water. Do not use on any fabrics that can be damage by water or thinner. Rubber hand gloves, if necessary. Separately wash white & dyed/printed clothes.",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়ে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। প্রয়োজনে, হ্যান্ড গ্লোভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 9,
    "Product_Name": "ISV",
    "image": img1,
    "Price": "320 Tk",
    "Weight": "250 ml",
    "Category": "Ink Spot Remover",
    "Description": "Used to remove ink spot. It is very effective for erasing the spot of ball pen from the cloth in dry condition.",
    "useEng": "Use some drops of ISV on the spot and you will notice that is melting. If the ink is light, it will disappear, if the ink is deep, run it up with a scanty G.S Vanish Cream and wash up ist fresh water. Put some drop of ISV on the ballpen ink, the link will spread, rub with brush until the ink disappear. If the ink is deep, then wash well rubbing with Spot Vanish Cream.",
    "use_Bangla": "শুকনো অবস্থায় কাপড় থেকে বলপেনের দাগ ওঠানোর জন্য অত্যন্ত কার্যকরী। কয়েক ফোঁটা আই.এস.ভি বলপেনের কালির উপর ফেলুন, কালি ছড়িয়ে যাবে, ব্রাশ দিয়ে ঘষুন, কালি অদৃশ্য না হওয়া পর্যন্ত একই নিয়ম প্রয়োগ করুন, কালি সম্পূর্ণ অদৃশ্য না হলে পানির সাহায্যে স্পট ভ্যানিশ দিয়ে কচলিয়ে ধুয়ে নিন।",
    "Storage": "N/A",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Keep Away From Fire.",
    "Warning_Bangla": "আগুন হতে দূরে থাকুন।"
  },
  {
    "id": 10,
    "Product_Name": "MARKBILL - 2",
    "image": img1,
    "Price": "440 Tk",
    "Weight": "250 ml",
    "Category": "Rust and Head Spot Remover",
    "Description": "Use for Rust and any Head Spot any Fabrics.",
    "useEng": "Put some drop of \"MARKBILL 2\" on the spot then hand or soft brush and wash with clean water. Some drop of Markbill- 2 put on the spot, then ruby soft brush and wash Spot Vanish Cream.",
    "use_Bangla": "দাগের উপর অল্প পরিমাণ মার্কবিল-২ নিন এরপর নরম ব্রাশ দ্বারা ঘষে স্পট ভেনিশ ক্রিম দিয়ে ধুয়ে ফেলুন।",
    "Storage": "Keep in cool and dry place.",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "Do not use on any fabrics that can be damage by water or thinner. Rubber hand gloves, if necessary. Separately wash white & dyed/printed clothes.",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়ে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। প্রয়োজনে, হ্যান্ড গ্লোভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 11,
    "Product_Name": "S.S.V",
    "image": img1,
    "Price": "600 Tk",
    "Weight": "250 ml",
    "Category": "Hard Spot Remover",
    "Description": "Hard Spot Remover for General Colour Knit, Woven, Sweater Garments.",
    "useEng": "Apply two or three drops. HSV: Plasing clothsmoothly Sopt. After use wash cloth cmothly by fresh water. Some drop of S.S.V put on the spot, then ruby soft brush and wash H.S.V.",
    "use_Bangla": "দাগের উপর অল্প পরিমাণ এস.এস.ভি নিন এরপর নরম ব্রাশ দ্বারা ঘষে এইচ.এস.ভি দিয়ে ধুয়ে ফেলুন।",
    "Storage": "Keep in cool and dry place.",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "When you use S.S.V must wash your colour cloth by fresh water. Do not use on any fabrics that can be damage by water or thinner. Rubber hand gloves, if necessary. Separately wash white & dyed/printed clothes.",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়ে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। প্রয়োজনে, হ্যান্ড গ্লোভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 12,
    "Product_Name": "PSR PLUS",
    "image": img1,
    "Price": "350 Tk",
    "Weight": "250 ml",
    "Category": "Prints, Blot and Wet Washing Spot Remover",
    "Description": "Use for prints, blot and wet washing spots.",
    "useEng": "Put some drop of 'PSR' on the spot, then rubby hand or soft brush and wash GENIOUS. Some drop of PSR put on the spot, then ruby soft brush and wash Spot Vanish Cream.",
    "use_Bangla": "দাগের উপর অল্প পরিমাণ পি.এস.আর নিন এরপর নরম ব্রাশ দ্বারা ঘষে স্পট ভেনিশ দিয়ে ধুয়ে ফেলুন। প্রিন্টের দাগ এবং ধৌত হওয়ার অপরিশ্রুত জন্য।",
    "Storage": "Keep in cool and dry place.",
    "Mfg_Date": "August 2025",
    "Exp_Date": "July 2026",
    "warning_English": "Do not use on any fabrics that can be damage by water or thinner. Rubber hand gloves, if necessary. Separately wash white & dyed/printed clothes.",
    "Warning_Bangla": "পানি ও থिनার যে কাপড়ে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। প্রয়োজনে, হ্যান্ড গ্লাভস ব্যবহার করুন। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন। ব্যবহারে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 13,
    "Product_Name": "See WATER (সি ওয়াটার)",
    "image": img1,
    "Price": "450 Tk (For 1 Litter)",
    "Weight": "1 Litter",
    "Category": "Chemical / Spot Remover",
    "Description": "See is a modern standard chemical. All kinds of Dirt, P.P Soprt, Yellow Sport & Oil spot Remover. USE FOR MARKER PEN, SILK PAD, BLACK INK, FABRICS FALT, PET BLOT AND WET WASHING SPOT.",
    "useEng": "Some drop of “See Water” on the spot then rub by hand or soft brush and wash.",
    "use_Bangla": "দাগের উপর অল্প পরিমাণ সি ওয়াটার নিন, এরপর নরম ব্রাশ দিয়ে ঘষে পরিষ্কার পানিতে ধুয়ে নিন।",
    "Storage": "N/A",
    "Mfg_Date": "N/A",
    "Exp_Date": "N/A",
    "warning_English": "N/A",
    "Warning_Bangla": "N/A"
  }
  ]



// ------------ Extra -------------------------
/*

{
  "Product_Name": "R-11",
  "image": img1,
  "Price": "160 Tk",
  "Weight": "250ml",
  "Category": "Chemical",
  "Description": "R-11 is basically use for cleaning hard spot of rust in the white cloths. Hard Spot Remover for General Colour Knit, Woven, Sweater Garments.",
  "useEng": "Put some quantity of R-11 on the spot. Some drop of R-1 on the R-11, then rub with brush, wash well in the clean water rubbing with Spot Vanish Cream. Apply two or three drops.",
  "use_Bangla": "মূলত সাদা কাপড়ে কঠিন জং এর দাগ উঠানোর ক্ষেত্রে ব্যবহার্য। কিছু পরিমাণ আর-১১ দাগের উপর রাখুন। এরপর কয়েক ফোঁটা আর-১, আর-১১ এর উপর ফেলুন। এরপর ব্রাশ দিয়ে ঘষে পানিতে ধুয়ে ফেলুন।",
  "Storage": "N/A",
  "Mfg_Date": "N/A",
  "Exp_Date": "N/A",
  "warning_English": "Do not use in color fabrics. When you use R-2 must wash your colour cloth by fresh water.",
  "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না! R-2 ব্যবহারের পর অবশ্যই আপনার রঙিন কাপড় পরিষ্কার জলে ধুয়ে নিন।"
},
  {
    "Product_Name": "BTS",
    "image": img1,
    "Price": "520 Tk",
    "Weight": "1 Liter (797 gm)",
    "Category": "Chemical",
    "Use_Bangla": "কাপড় থেকে তৈলাক্ত গ্রীস এবং আঠালো জাতীয় পদার্থ দূর করে। হলুদ দাগ, স্ট্যাম্প প্যাড, কাপড়ের রঙের কালি বা সেলাইয়ের কালি দূর করে।",
    "Warning_Bangla": "আগুণ ও শিশুদের নাগালের বাইরে রাখুন। এটি প্লাস্টিক, রাবারযুক্ত কাপড় বা চামড়ায় ব্যবহার করবেন না। ব্যবহারের সময় সর্বদা সতর্ক থাকুন।"
  },
  {
    "Product_Name": "SEAGATE-2",
    "image": img1,
    "Price": "630 Tk",
    "Weight": "1 Liter (782 gm)",
    "Category": "Chemical",
    "Use_Bangla": "কাপড় থেকে তৈলাক্ত গ্রীস এবং আঠালো জাতীয় পদার্থ দূর করে।",
    "Warning_Bangla": "আগুণ ও শিশুদের নাগালের বাইরে রাখুন। এটি প্লাস্টিক, রাবারযুক্ত কাপড় বা চামড়ায় ব্যবহার করবেন না। ব্যবহারের সময় সর্বদা সতর্ক থাকুন।"
  },
  {
    "Product_Name": "R-11",
    "image": img1,
    "Price": "160 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Use_Bangla": "মূলত সাদা কাপড়ে কঠিন জং এর দাগ উঠানোর ক্ষেত্রে ব্যবহার্য।",
    "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না।"
  },
  {
    "Product_Name": "R-1",
    "image": img1,
    "Price": "340 Tk",
    "Weight": "250 gm",
    "Category": "Chemical",
    "Use_Bangla": "কাপড়ের জং পরিষ্কারের জন্য উপযুক্ত। এটি কাদা মাটি ও আয়রনের ক্ষেত্রেও ব্যবহার্য।",
    "Warning_Bangla": "যে কাপড়গুলি জল এবং থিনার দ্বারা ব্যবহারযোগ্য নয়, সেই কাপড়ে R-1 ব্যবহার করবেন না।"
  },
  {
    "Product_Name": "ISV",
    "image": img1,
    "Price": "320 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Use_Bangla": "শুকনা অবস্থায় কাপড় থেকে **বলপেন এর দাগ** উঠানোর জন্য অত্যন্ত কার্যকরী।",
    "Warning_Bangla": "আগুন হতে দূরে থাকুন। পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না।"
  },
  {
    "Product_Name": "Yellow Plus",
    "image": img1,
    "Price": "590 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Use_Bangla": "**হলদে দাগ**, কালো কালি, নীল প্যাড, সিল প্যাড দাগ এবং হেডের দাগ তোলার জন্য ব্যবহার্য। এটি কঠিন দাগ দূর করে।",
    "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না।"
  },
  {
    "Product_Name": "TSR",
    "image": img1,
    "Price": "290 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Use_Bangla": "সাদা কাপড়ের **জং এবং হেডের দাগ** উঠানোর জন্য অত্যন্ত কার্যকরী। এটি কঠিন দাগ দূর করে।",
    "Warning_Bangla": "রঙিন কাপড়ে ব্যবহার করবেন না।"
  },
  {
    "Product_Name": "H.S.V",
    "image": img1,
    "Price": "460 Tk",
    "Weight": "250ml",
    "Category": "Chemical",
    "Use_Bangla": "কঠিন দাগ দূর করার জন্য ব্যবহার্য।",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "Product_Name": "Spot Vanish Cream",
    "image": img1,
    "Price": "340 Tk",
    "Weight": "N/A",
    "Category": "Cream/Additive",
    "Use_Bangla": "দাগের উপর কম পরিমাণে স্পট ভ্যানিশ ক্রিম রাখুন, অল্প পানি নিন, ব্রাশ অথবা হাত দ্বারা ঘষুন এবং পরিষ্কার পানিতে ধুয়ে নিন।",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে স্পট ভ্যানিশ ব্যবহার করবেন না। সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "Product_Name": "PSR",
    "image": img1,
    "Price": "350 Tk",
    "Weight": "250 ml",
    "Category": "Chemical",
    "Use_Bangla": "**প্রিন্টের দাগ** এবং ভেজা ধোয়ার দাগ (wet washing spot) দূর করার জন্য ব্যবহার্য।",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। হ্যান্ড গ্লাভস ব্যবহার করুন এবং সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "Product_Name": "MARKBILL-2",
    "image": img1,
    "Price": "440 Tk",
    "Weight": "250 ml",
    "Category": "Chemical",
    "Use_Bangla": "জং এবং যেকোনো **হেড স্পট** (head spot) দূর করার জন্য ব্যবহার্য।",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। হ্যান্ড গ্লাভস ব্যবহার করুন এবং সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "Product_Name": "S.S.V",
    "image": img1,
    "Price": "600 Tk",
    "Weight": "250 ml",
    "Category": "Chemical",
    "Use_Bangla": "সাধারণ রঙের নিট, ওভেন, সোয়েটার জাতীয় কাপড়ের কঠিন দাগ দূর করার জন্য ব্যবহার্য।",
    "Warning_Bangla": "পানি ও থিনার যে কাপড়কে ব্যবহারযোগ্য নয়, সে কাপড়ে ব্যবহার করবেন না। হ্যান্ড গ্লাভস ব্যবহার করুন এবং সাদা ও রঙিন কাপড় আলাদাভাবে ধৌত করুন।"
  },
  {
    "Product_Name": "See Water (সি ওয়াটার)",
    "image": img1,
    "Price": "450 Tk (1 Liter)",
    "Weight": "1 Liter",
    "Category": "Chemical",
    "Use_Bangla": "**মার্কার পেন, সিল্ক প্যাড, কালো কালি, কাপড়ের ফাল্ট, পোষা প্রাণীর দাগ** এবং ভেজা ধোয়ার দাগের (wet washing spot) জন্য ব্যবহার্য। এটি **সব ধরণের ময়লা, পিপি দাগ, হলুদ দাগ, তেল স্পট দূরকারী**।",
    "Warning_Bangla": "N/A (ছবিতে সতর্কতার বাংলা অংশ স্পষ্ট নেই)"
  }

  */
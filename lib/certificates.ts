export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certificateNumber: string;
  type: "license" | "registration" | "tax" | "other";
  description: string;
  imageUrl?: string;
  docUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Trade License",
    issuer: "Dhaka City Corporation",
    issueDate: "2024",
    certificateNumber: "02-35373",
    type: "license",
    description:
      "Official trade license issued by Dhaka City Corporation for conducting business operations in Bangladesh.",
    // docUrl: "/certificate/BDH Certificate 2021.pdf",
    imageUrl: "/certificate/cert4.jpeg",
  },
  {
    id: "2",
    title: "BIN Certificate",
    issuer: "National Board of Revenue",
    issueDate: "February 19, 2020",
    certificateNumber: "000905938-0402",
    type: "registration",
    description:
      "Business Identification Number (BIN) certificate issued by the National Board of Revenue, Government of Bangladesh.",
    imageUrl: "/certificate/cert4.jpeg",
  },
  {
    id: "3",
    title: "VAT Registration Certificate",
    issuer: "National Board of Revenue",
    issueDate: "February 19, 2020",
    certificateNumber: "000905938-0402",
    type: "tax",
    description:
      "Value Added Tax Registration Certificate from Customs, Excise and VAT Commissionerate, Dhaka (West).",
    imageUrl: "/certificate/cert6.jpeg",
  },
];

export interface MsdsDocument {
  id?: string;
  title?: string;
  document?: string;
  image?: string;
  thumbnail?: string;
}

export const msdsBanglaDocs: MsdsDocument[] = [
  {
    id: "1",
    title: "BTS",
    document: "/msdsbangla/BTS_BN.pdf",
    thumbnail: "/msdsbangla/BTS_BN.jpg",
  },
  {
    id: "2",
    title: "BTS-1",
    document: "/msdsbangla/BTS-1_BN.pdf",
    thumbnail: "/msdsbangla/BTS-1_BN.jpg",
  },
  {
    id: "3",
    title: "Dry Solve",
    document: "/msdsbangla/Dry Solve_BN.pdf",
    thumbnail: "/msdsbangla/Dry Solve_BN.jpg",
  },
  {
    id: "4",
    title: "HSV",
    document: "/msdsbangla/HSV_BN.pdf",
    thumbnail: "/msdsbangla/HSV_BN.jpg",
  },
  {
    id: "5",
    title: "ISV",
    document: "/msdsbangla/ISV_BN.pdf",
    thumbnail: "/msdsbangla/ISV_BN.jpg",
  },
  {
    id: "6",
    title: "Jote Mix",
    document: "/msdsbangla/Jote Mix_BN.pdf",
    thumbnail: "/msdsbangla/Jote Mix_BN.jpg",
  },
  {
    id: "7",
    title: "Joti Max",
    document: "/msdsbangla/Joti Max_BN.pdf",
    thumbnail: "/msdsbangla/Joti Max_BN.jpg",
  },
  {
    id: "8",
    title: "Markbill-2",
    document: "/msdsbangla/Markbill-2_BN.pdf",
    thumbnail: "/msdsbangla/Markbill-2_BN.jpg",
  },
  {
    id: "9",
    title: "NEW MSDS Dry Solve",
    document: "/msdsbangla/NEW MSDS Dry Solve_BN.pdf",
    thumbnail: "/msdsbangla/NEW MSDS Dry Solve_BN.jpg",
  },
  {
    id: "10",
    title: "PSR",
    document: "/msdsbangla/PSR_BN.pdf",
    thumbnail: "/msdsbangla/PSR_BN.jpg",
  },
  {
    id: "11",
    title: "R-1",
    document: "/msdsbangla/R-1_BN.pdf",
    thumbnail: "/msdsbangla/R-1_BN.jpg",
  },
  {
    id: "12",
    title: "R-2",
    document: "/msdsbangla/R-2_BN.pdf",
    thumbnail: "/msdsbangla/R-2_BN.jpg",
  },
  {
    id: "13",
    title: "S.Rival_BN",
    document: "/msdsbangla/S.Rival_BN.pdf",
    thumbnail: "/msdsbangla/S.Rival_BN.jpg",
  },
  {
    id: "14",
    title: "SSV_BN",
    document: "/msdsbangla/SSV_BN.pdf",
    thumbnail: "/msdsbangla/SSV_BN.jpg",
  },
  {
    id: "15",
    title: "TSR",
    document: "/msdsbangla/TSR_BN.pdf",
    thumbnail: "/msdsbangla/TSR_BN.jpg",
  },
  {
    id: "16",
    title: "Yellow Plus",
    document: "/msdsbangla/Yellow Plus_BN.pdf",
    thumbnail: "/msdsbangla/Yellow Plus_BN.jpg",
  },
];

export const msdsEnglishDocs: MsdsDocument[] = [
  {
    id: "1",
    title: "BTS",
    document: "/msdsenglish/BTS.pdf",
    thumbnail:  "/msdsenglish/BTS.jpg",  
  },
  {
    id: "2",
    title: "DRY Solve",
    document: "/msdsenglish/DRY Solve.pdf",
    thumbnail: "/msdsenglish/DRY Solve.jpg",
  },
  {
    id: "3",
    title: "HSV",
    document: "/msdsenglish/HSV.pdf",
    thumbnail: "/msdsenglish/HSV.jpg",
  },
  {
    id: "4",
    title: "ISV",
    document: "/msdsenglish/ISV.pdf",
    thumbnail: "/msdsenglish/ISV.jpg",
  },
  {
    id: "5",
    title: "Jote Mix",
    document: "/msdsenglish/Jote Mix.pdf",
    thumbnail: "/msdsenglish/Jote Mix.jpg",
  },
  {
    id: "6",
    title: "Markbill 2",
    document: "/msdsenglish/Markbill 2.pdf",
    thumbnail: "/msdsenglish/Markbill 2.jpg",
  },
  {
    id: "7",
    title: "PSR PLUS",
    document: "/msdsenglish/PSR PLUS.pdf",
    thumbnail: "/msdsenglish/PSR PLUS.jpg",
  },
  {
    id: "8",
    title: "PSR",
    document: "/msdsenglish/PSR.pdf",
    thumbnail: "/msdsenglish/PSR.jpg",
  },
  {
    id: "9",
    title: "S Rivel",
    document: "/msdsenglish/S Rivel.pdf",
    thumbnail: "/msdsenglish/S Rivel.jpg",
  },
  {
    id: "10",
    title: "Seagate-2",
    document: "/msdsenglish/Seagate-2.pdf",
    thumbnail: "/msdsenglish/Seagate-2.jpg",
  },
  {
    id: "11",
    title: "Sport Vanish Cream",
    document: "/msdsenglish/Sport Vanish Cream.pdf",
    thumbnail: "/msdsenglish/Sport Vanish Cream.jpg",
  },
  {
    id: "12",
    title: "TSR",
    document: "/msdsenglish/TSR.pdf",
    thumbnail: "/msdsenglish/TSR.jpg",
  },
  {
    id: "13",
    title: "Yellow Plus",
    document: "/msdsenglish/Yellow Plus.pdf",
    thumbnail: "/msdsenglish/Yellow Plus.jpg",
  },
];
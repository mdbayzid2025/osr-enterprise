export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certificateNumber: string;
  type: "license" | "registration" | "tax" | "other";
  description: string;
  imageUrl: string;
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
    imageUrl: "/certificate/cert3.jpeg",
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
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
    description: "Official trade license issued by Dhaka City Corporation for conducting business operations in Bangladesh.",
    imageUrl: "../app/certificate/trade license.jpg"
  },
  {
    id: "2",
    title: "BIN Certificate",
    issuer: "National Board of Revenue",
    issueDate: "February 19, 2020",
    certificateNumber: "000905938-0402",
    type: "registration",
    description: "Business Identification Number (BIN) certificate issued by the National Board of Revenue, Government of Bangladesh.",
    imageUrl: "/certificates/bin-certificate.jpg"
  },
  {
    id: "3",
    title: "VAT Registration Certificate",
    issuer: "National Board of Revenue",
    issueDate: "February 19, 2020",
    certificateNumber: "000905938-0402",
    type: "tax",
    description: "Value Added Tax Registration Certificate from Customs, Excise and VAT Commissionerate, Dhaka (West).",
    imageUrl: "/certificates/vat-certificate.jpg"
  },
  {
    id: "4",
    title: "TIN Certificate",
    issuer: "National Board of Revenue",
    issueDate: "July 21, 2016",
    certificateNumber: "668324928896",
    type: "tax",
    description: "Taxpayer's Identification Number (TIN) Certificate issued under the jurisdiction of Taxes Circle-017 (Awshgonj).",
    imageUrl: "/certificates/tin-certificate.jpg"
  },
  {
    id: "5",
    title: "City Corporation Trade License",
    issuer: "Narayanganj City Corporation",
    issueDate: "2024",
    certificateNumber: "8232",
    type: "license",
    description: "Trade license issued by Narayanganj City Corporation for business operations within the city jurisdiction.",
    imageUrl: "/certificates/city-trade-license.jpg"
  }
];

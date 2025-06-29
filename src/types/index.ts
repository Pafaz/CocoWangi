export interface Product {
  id: string;
  name: string;
  nameId: string;
  category: string;
  description: string;
  descriptionId: string;
  image: string;
  specifications: {
    moisture?: string;
    purity?: string;
    packaging?: string;
    origin: string;
  };
  applications: string[];
  certificationsHeld: string[];
  minOrderQuantity: string;
  exportPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  flag: string;
  rating: number;
  review: string;
  reviewId: string;
  productCategory: string;
  orderVolume: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
  exportVolume: string;
  mainProducts: string[];
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  category: string;
  image: string;
  benefits: string[];
}

export interface Bundle {
  id: string;
  name: string;
  products: string[];
  price: number;
  discount: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

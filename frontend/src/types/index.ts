export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  stock?: number;
}

export interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  total: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface CheckoutData {
  name: string;
  email: string;
}

export interface Receipt {
  receiptId: string;
  userId: string;
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    itemTotal: number;
  }[];
  total: number;
  timestamp: string;
  status: string;
}
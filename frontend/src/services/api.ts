import axios from 'axios';
import type { Product, Cart, Receipt } from '../types';

const API_BASE_URL = 'https://bckend-2.onrender.com/v1/api/';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Auth APIs
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  },
  
  logout: async () => {
    const response = await api.post('/users/logout');
    return response.data;
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  }
};

// Products APIs
export const productsAPI = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data.data;
  }
};

// Cart APIs
export const cartAPI = {
  getCart: async (): Promise<Cart> => {
    const response = await api.get('/cart');
    return response.data.data;
  },
  
  addToCart: async (productId: string, qty: number = 1) => {
    const response = await api.post('/cart', { productId, qty });
    return response.data;
  },
  
  removeFromCart: async (itemId: string) => {
    const response = await api.delete(`/cart/${itemId}`);
    return response.data;
  },
  
  checkout: async (cartItems: any[]): Promise<Receipt> => {
    const response = await api.post('/cart/checkout', { cartItems });
    return response.data.data;
  }
};

export default api;

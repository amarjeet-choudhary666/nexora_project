import React, { useState } from 'react';
import type { Cart, CheckoutData, Receipt } from '../types';
import { cartAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import ReceiptModal from './ReceiptModal';

interface CheckoutModalProps {
  cart: Cart;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cart, onClose }) => {
  const [formData, setFormData] = useState<CheckoutData>({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [error, setError] = useState('');
  const { refreshCart } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Create receipt from current cart data
    const receiptFromCart = {
      receiptId: `RCP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      userId: 'current-user',
      items: cart.items.map(item => ({
        productId: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        itemTotal: item.product.price * item.quantity
      })),
      total: cart.total,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show receipt - let ReceiptModal handle the 4-second timer
    setReceipt(receiptFromCart);
    setLoading(false);

    // Clear cart after showing receipt
    setTimeout(() => {
      refreshCart();
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (receipt) {
    return (
      <ReceiptModal
        receipt={receipt}
        onClose={() => {
          setReceipt(null);
          onClose(); // Close the entire checkout modal
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition-colors"
          >
            {loading ? 'Processing...' : 'Complete Checkout'}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;

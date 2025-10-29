import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentView: 'products' | 'cart';
  onViewChange: (view: 'products' | 'cart') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { user, logout } = useAuth();
  const { cartItemsCount } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Vibe Commerce</h1>
          
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => onViewChange('products')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === 'products'
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              Products
            </button>
            
            <button
              onClick={() => onViewChange('cart')}
              className={`relative px-4 py-2 rounded-lg transition-colors ${
                currentView === 'cart'
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-blue-100">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
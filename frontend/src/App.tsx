import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Login from './components/Login';
import ProductsGrid from './components/ProductsGrid';
import CartView from './components/CartView';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'products' | 'cart'>('products');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main>
        {currentView === 'products' ? <ProductsGrid /> : <CartView />}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

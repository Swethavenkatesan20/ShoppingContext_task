import React from 'react';
import { CartProvider } from './contexts/CartContext';
import CartPage from './CartPage';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;

import React from 'react';
import { useCart } from './contexts/CartContext';

const CartPage = () => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalAmount, products } = useCart();

  return (
    <div className="container">
      <h1 className="text-center my-4">Shop Now</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card bg-light"> 
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Stock: {product.stock}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="my-4">Cart Items</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.title} - ${item.price} - Quantity: {item.quantity}
            <div>
              <button
                className="btn btn-success ml-3"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <button
                className="btn btn-danger ml-1"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount()}</p>
      </div>
    </div>
  );
};

export default CartPage;

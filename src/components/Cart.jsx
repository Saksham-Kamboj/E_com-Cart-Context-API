import React from "react";
import { useCart } from "../Context/Cart";

function Cart() {
  const cart = useCart();
  const cartItems = cart.cartItems;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <ul className="space-y-4">
        {cartItems?.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div className="flex items-center">
              <span className="font-medium">{item.name}</span>
            </div>
            <span className="text-green-600 font-semibold">
              ${item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex icon justify-between text-lg font-semibold">
        <span>Total Items: {cartItems.length}</span>
        <span>Total Price: ${total.toFixed(2)}</span>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;

import React from "react";
import { useCart } from "../Context/Cart";

const items = [
  { id: 1, name: "Smartphone", price: 599.99 },
  { id: 2, name: "Laptop", price: 999.99 },
  { id: 3, name: "Headphones", price: 149.99 },
  { id: 4, name: "Smartwatch", price: 249.99 },
  { id: 5, name: "Tablet", price: 399.99 },
  { id: 6, name: "Camera", price: 699.99 },
  { id: 7, name: "Gaming Console", price: 499.99 },
  { id: 8, name: "Wireless Earbuds", price: 129.99 },
  { id: 9, name: "Fitness Tracker", price: 79.99 },
  // { id: 10, name: "Portable Speaker", price: 89.99 },
];

function Item() {
  const cart = useCart();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                onClick={() => {
                  cart.setCartItems((prevItems) => [...prevItems, item]);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;

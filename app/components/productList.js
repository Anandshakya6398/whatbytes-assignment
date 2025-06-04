'use client';

import { ShoppingCart, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Running Shoes', price: 99, image: '/shoes.png', rating: 4, category: 'footwear' },
  { id: 2, name: 'Wireless Headphones', price: 199, image: '/headphone.png', rating: 5, category: 'electronics' },
  { id: 3, name: 'Backpack', price: 129, image: '/bag.png', rating: 3, category: 'accessories' },
  { id: 4, name: 'Smartwatch', price: 249, image: '/smartwatch.png', rating: 4, category: 'electronics' },
  { id: 5, name: 'Sunglasses', price: 149, image: '/sunglass.png', rating: 4, category: 'accessories' },
  { id: 6, name: 'Digital Camera', price: 499, image: '/camera.png', rating: 5, category: 'electronics' },
  { id: 7, name: 'T-shirt', price: 29, image: '/tshirt.png', rating: 3, category: 'clothing' },
  { id: 8, name: 'Smartphone', price: 699, image: '/mobile.png', rating: 5, category: 'electronics' },
];

function Stars({ count }) {
  return (
    <div className="flex items-center justify-center mb-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function ProductList({ search, category, priceRange }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  // Filter products by search text
  const filteredProducts = products.filter(p => {
    const matchCategory = category === 'all' ? true : (p.category?.toLowerCase() === category);
    const matchPrice = priceRange ? p.price <= priceRange : true;
    const matchSearch = search ? p.name.toLowerCase().includes(search.toLowerCase()) : true;
    return matchCategory && matchPrice && matchSearch;
  });

  // Handle add to cart and show popup
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1200);
  };

  return (
    <div className="w-full px-14 p-4 space-y-4 ">
      <h2 className="text-2xl font-semibold text-blue-900">Product Listing</h2>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
          Added in cart
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8">
            No products found.
          </div>
        )}
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-lg p-2 text-center flex flex-col items-center justify-between max-w-xs mx-auto"
          >
            {/* Image and Name wrapped in Link */}
            <Link href={`/product/${p.id}`} className="w-full">
              <div className="w-full aspect-square mb-2 flex items-center justify-center overflow-hidden bg-gray-50 rounded-md cursor-pointer">
                <img
                  src={p.image}
                  alt={p.name}
                  className={`w-full h-full ${p.name === 'Running Shoes' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>
              <p className="font-medium text-base hover:underline">{p.name}</p>
            </Link>
            <Stars count={p.rating} />
            <p className="text-sm text-gray-600 mb-2">${p.price}</p>
            <button
              className="mt-auto px-2 py-1 bg-blue-800 text-white rounded hover:bg-blue-900 flex items-center gap-1 text-sm"
              onClick={() => handleAddToCart(p)}
            >
              <ShoppingCart size={15} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
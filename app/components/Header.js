'use client';

import { ShoppingCart, Search, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ onSearch }) {
  const cartCount = useSelector(state => state.cart.totalCount);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="bg-blue-900 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-white z-50 sticky top-0 left-0 w-full shadow gap-3 sm:gap-0">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link href="/" className="text-2xl font-bold">Logo</Link>
        {/* Cart and Avatar on mobile */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link href="/cart" className="flex items-center bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-800 transition relative">
            <ShoppingCart className="mr-1 h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 transition">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
      {/* Searchbar */}
      <div className="flex items-center bg-blue-800 px-3 py-2 rounded-lg w-full max-w-md mx-auto sm:mx-4">
        <Search className="text-white mr-2 h-5 w-5" />
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={handleChange}
          className="bg-transparent outline-none text-white w-full placeholder-white"
        />
      </div>
      {/* Cart and Avatar on desktop */}
      <div className="hidden sm:flex items-center gap-4">
        <Link href="/cart" className="flex items-center bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition relative">
          <ShoppingCart className="mr-2 h-5 w-5" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 transition">
          <User className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
}
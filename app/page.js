'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Sidebar from './components/Sidebar';
import ProductList from './components/productList';
import Footer from './components/footer';

export default function Home() {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(1000);
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header onSearch={setSearch} />
      <div className='flex flex-col md:flex-row'>
        <Sidebar
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <ProductList
          search={search}
          category={category}
          priceRange={priceRange}
        />
      </div>
      <Footer />
    </div>
  );
}
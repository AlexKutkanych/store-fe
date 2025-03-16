import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProductsGridPage from '@/pages/ProductsGridPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/men/products-grid' element={<ProductsGridPage />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import ProductCard from './components/ProductCard';
import etbImg from './assets/products/151-etb.png'; // temp image

function App() {
  const sampleProduct = {
    title: '151 Elite Trainer Box',
    image: etbImg, 
    availableAt: ['target', 'amazon', 'walmart', 'bestbuy', 'samsclub', 'costco'],
    enabledRetailers: ['target'],
  };

  return (
    <div style={{ padding: 20 }}>
      <ProductCard product={sampleProduct} />

    </div>
  );
}

export default App;

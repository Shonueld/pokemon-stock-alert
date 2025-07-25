import React, { useState } from 'react';
import './ProductCard.css';
import logos from '../assets/retailerLogos';

const allRetailers = ['target', 'amazon', 'walmart', 'bestbuy', 'costco', 'samsclub'];

export default function ProductCard({ product }) {
  const [enabledRetailers, setEnabledRetailers] = useState(new Set(product.enabledRetailers || []));

  const toggleRetailer = (retailer) => {
    const newSet = new Set(enabledRetailers);
    if (enabledRetailers.has(retailer)) {
      newSet.delete(retailer);
    } else {
      newSet.add(retailer);
    }
    setEnabledRetailers(newSet);
  };

  const toggleAll = () => {
    const isAllEnabled = product.availableAt.every(retailer => enabledRetailers.has(retailer));
    setEnabledRetailers(new Set(isAllEnabled ? [] : product.availableAt));
  };

  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>

      <div className="retailers">
        <button className="select-all" onClick={toggleAll}>
          {product.availableAt.every(ret => enabledRetailers.has(ret)) ? 'Disable All' : 'Enable All'}
        </button>

        {product.availableAt.map(retailer => (
          <button
            key={retailer}
            className={`retailer-button ${enabledRetailers.has(retailer) ? 'enabled' : 'disabled'}`}
            onClick={() => toggleRetailer(retailer)}
          >
            <img src={logos[retailer]} alt={retailer} className="retailer-logo" />
          </button>
        ))}
      </div>
    </div>
  );
}

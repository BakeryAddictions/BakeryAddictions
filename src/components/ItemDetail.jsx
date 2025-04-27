import React, { useState } from 'react';

export const ItemDetail = ({ item, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [message, setMessage] = useState('');

  if (!item) return <div>Select an item to see details.</div>;

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...item,
      ...(selectedVariant || {}),
    };

    if (onAddToCart && typeof onAddToCart === 'function') {
      onAddToCart(itemToAdd);
      setMessage('Item added to cart successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      console.error("onAddToCart is not a valid function.");
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
      {item.variants ? (
        <div className="mb-4">
          <p className="mb-2 font-medium">Choose a weight:</p>
          {item.variants.map((variant, index) => (
            <label key={index} className="block text-sm text-gray-700 mb-1">
              <input
                type="radio"
                name="weight"
                value={variant.weight}
                className="mr-2"
                onChange={() => handleVariantChange(variant)}
              />
              {variant.weight} - ₹{variant.price}
            </label>
          ))}
        </div>
      ) : (
        <p className="mb-4">Price: ₹{item.price}</p>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
        disabled={item.variants && !selectedVariant}
      >
        Add to Cart
      </button>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
};
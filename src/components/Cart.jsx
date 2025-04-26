import React from 'react';

export const Cart = ({ cart, onProceed }) => {
  // Calculate the expected delivery date (next day)
  const today = new Date();
  const expectedDeliveryDate = new Date(today);
  expectedDeliveryDate.setDate(today.getDate() + 1);

  const formattedDeliveryDate = expectedDeliveryDate.toLocaleDateString();

  return (
    <div className="cart-container">
      <h2 className="text-lg font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.weight ? `${item.weight} - ₹${item.price}` : `₹${item.price}`}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <strong>Expected Delivery Date:</strong> {formattedDeliveryDate}
          </p>
          <p className="text-sm text-red-600 mt-2">
            Note: Custom orders need to be placed on call. All orders should be placed at least one day before the expected delivery date.
          </p>
        </div>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        onClick={onProceed}
        disabled={cart.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
};
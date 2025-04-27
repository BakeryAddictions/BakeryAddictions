// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)
// deprecated
import React, { useState } from 'react';

export const Payment = ({ cart, onOrderConfirmed }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    deliveryDate: '',
    paymentMethod: 'Cash on Delivery'
  });

  const handleConfirm = async () => {
    const order = {
      ...formData,
      cart,
      total: cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2),
      orderDate: new Date().toLocaleDateString()
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwFi3FVs1WW2XyEQrVf5KXC7KeF6lHqACD2KHZtCRT-pfYEyN-SvdmFAHH1MsDX56jr/exec',
        {
          method: 'POST',
          body: JSON.stringify(order),
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Order submitted:', result);
      onOrderConfirmed(order);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Enter Delivery Info</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contact Number"
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="date"
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
      />
      <div>
        <label className="block font-semibold">Payment Method</label>
        <select
          className="border p-2 w-full"
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Credit Card">Credit Card</option>
        </select>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleConfirm}
      >
        Confirm & Pay
      </button>
    </div>
  );
};
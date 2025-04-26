import React, { useState } from 'react';

export const Payment = ({ cart, onOrderConfirmed }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    deliveryDate: '',
    paymentMethod: 'Cash on Delivery',
  });
  const [showQR, setShowQR] = useState(false);
  const [upiUri, setUpiUri] = useState('');

  const handleConfirm = async () => {
    const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    const order = {
      ...formData,
      cart,
      total: totalAmount,
      orderDate: new Date().toLocaleDateString(),
    };

    if (formData.paymentMethod === 'UPI') {
      const uri = `upi://pay?pa=jhanavi.dave97@okhdfcbank&pn=${encodeURIComponent(formData.name)}&am=${totalAmount}&cu=INR`;
      setUpiUri(uri);
      setShowQR(true);

      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwFi3FVs1WW2XyEQrVf5KXC7KeF6lHqACD2KHZtCRT-pfYEyN-SvdmFAHH1MsDX56jr/exec',
          {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        const result = await response.json();
        console.log('Order submitted:', result);
        onOrderConfirmed(order);

        // Try redirecting to UPI app (mobile)
        window.location.href = uri;
      } catch (error) {
        console.error('UPI Order error:', error);
      }
    } else {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwFi3FVs1WW2XyEQrVf5KXC7KeF6lHqACD2KHZtCRT-pfYEyN-SvdmFAHH1MsDX56jr/exec',
          {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        const result = await response.json();
        console.log('Order submitted:', result);
        onOrderConfirmed(order);
      } catch (error) {
        console.error('Fetch error:', error);
      }
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
          <option value="UPI">UPI</option>
        </select>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleConfirm}
      >
        Confirm & Pay
      </button>

      {showQR && formData.paymentMethod === 'UPI' && (
        <div className="mt-4 text-center">
          <p className="mb-2 font-semibold">Scan this QR Code with your UPI app:</p>
          <img src="/path-to-your-qr-code-image.png" alt="UPI QR Code" className="mx-auto w-48 h-48" />
          <p className="mt-2 text-sm text-gray-600">{upiUri}</p>
        </div>
      )}
    </div>
  );
};

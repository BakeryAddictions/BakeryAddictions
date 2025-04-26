import React from 'react';

export const Cart = ({ cart, onProceed }) => {
  // Calculate the expected delivery date (next day)
  const today = new Date();
  const expectedDeliveryDate = new Date(today);
  expectedDeliveryDate.setDate(today.getDate() + 1);

  const formattedDeliveryDate = expectedDeliveryDate.toLocaleDateString();

  const handleConfirmOrder = async () => {
    const orderDetails = cart.map((item) => ({
      name: item.name,
      weight: item.weight || null,
      price: item.price,
    }));

    const order = {
      id: Date.now(), // Unique order ID
      items: orderDetails,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      expectedDeliveryDate: formattedDeliveryDate,
      completed: false,
    };

    // Save order to backend
    try {
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      alert('Order saved successfully!');
    } catch (error) {
      console.error('Failed to save order:', error);
      alert('Failed to place order. Please try again.');
    }

    // Redirect to UPI payment
    const upiId = "jhanavi.dave97@okhdfcbank"; // Replace with your UPI ID
    const upiUrl = `upi://pay?pa=${upiId}&pn=Bakery&mc=0000&tid=${order.id}&tr=${order.id}&tn=Order%20Payment&am=${order.total}&cu=INR`;
    window.location.href = upiUrl;
  };

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
      {cart.length > 0 && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          onClick={handleConfirmOrder}
        >
          Proceed to Payment
        </button>
      )}
    </div>
  );
};
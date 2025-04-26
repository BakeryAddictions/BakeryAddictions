import React from 'react';

export const Receipt = ({ order }) => {
  return (
    <div className="border p-4 shadow">
      <h2 className="text-xl font-bold mb-2">Receipt</h2>
      <p><strong>Name:</strong> {order.name}</p>
      <p><strong>Contact:</strong> {order.contact}</p>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Order Date:</strong> {order.orderDate}</p>
      <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
      <p><strong>Bakery Contact:</strong> +91-90000-00000</p>
      <hr className="my-2" />
      <ul>
        {order.cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p className="mt-2 font-semibold">Total: ${order.total}</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => window.print()}
      >
        Download Receipt
      </button>
    </div>
  );
};
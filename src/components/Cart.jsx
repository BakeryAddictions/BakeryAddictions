import { jsPDF } from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';
import React, { useState } from 'react';
import logo from './images/logo.png';
applyPlugin(jsPDF);

export const Cart = ({ cart }) => {
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Calculate the expected delivery date (next day)
  const today = new Date();
  const orderDate = today.toLocaleDateString();
  const expectedDeliveryDate = new Date(today);
  expectedDeliveryDate.setDate(today.getDate() + 2);
  const formattedDeliveryDate = expectedDeliveryDate.toLocaleDateString();

  const handleConfirmOrder = async () => {
    if (!customerName || !contactNumber) {
      alert('Please provide your name and contact number.');
      return;
    }

    const orderDetails = cart.map((item) => ({
      name: item.name,
      weight: item.weight || 'N/A',
      price: item.price,
    }));

    const order = {
      id: Date.now(), // Unique order ID
      customerName,
      contactNumber,
      orderDate,
      deliveryDate: formattedDeliveryDate,
      items: orderDetails,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      completed: false,
    };

    // Save order to backend
    try {
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
    } catch (error) {
      console.error('Failed to save order:', error);
      alert('Failed to place order. Please try again.');
      return;
    }

    // Generate and download the PDF receipt
    const doc = new jsPDF();

    // Add website logo
    // const logoUrl = './images/logo.png'; // Replace with the actual path to your logo
    const imgWidth = 30;
    const imgHeight = 30;
    doc.addImage(logo, 'PNG', 80, 10, imgWidth, imgHeight);

    // Add address and admin details
    doc.setFontSize(12);
    doc.setTextColor('#19609e');
    doc.setFillColor('#ede7f6');
    doc.rect(10, 35, 200, 20, 'F');
    doc.text('Pickup At: Monica Food Studio, B/103, Gokul Divine, S. V. Road, Irla, Vile Parle (W), Mumbai- 400056', 15, 42);
    doc.text('Contact: Monica Makwana | +919892255987', 15, 50);

    // Add order details
    doc.setFontSize(14);
    doc.text('Order Receipt', 15, 65);
    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 15, 75);
    doc.text(`Customer Name: ${customerName}`, 15, 85);
    doc.text(`Contact Number: ${contactNumber}`, 15, 95);
    doc.text(`Order Date: ${orderDate}`, 15, 105);
    doc.text(`Delivery Date: ${formattedDeliveryDate}`, 15, 115);

    // Add table for items
    const tableData = orderDetails.map((item) => [
      item.name,
      item.weight,
      `₹${item.price}`,
    ]);
    doc.autoTable({
      head: [['Item Name', 'Weight', 'Price']],
      body: tableData,
      startY: 125,
      theme: 'grid',
      styles: { fillColor: '#ede7f6', textColor: '#19609e' },
    });

    // Add total
    doc.text(`Total: ₹${order.total}`, 15, doc.lastAutoTable.finalY + 10);

    // Save the PDF
    doc.save(`Order_Receipt_${order.id}.pdf`);

    // Redirect to UPI payment
    const upiId = 'jhanavi.dave97@okhdfcbank'; // Replace with your UPI ID
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
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="border p-2 w-full"
              placeholder="Enter your name"
            />
          </label>
          <label className="block mb-2">
            Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border p-2 w-full"
              placeholder="Enter your contact number"
            />
          </label>
          <p className="text-sm text-gray-600">
            <strong>Order Date:</strong> {orderDate}
          </p>
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
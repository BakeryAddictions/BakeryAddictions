// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)
import emailjs from 'emailjs-com';
import { jsPDF } from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';
import React, { useState } from 'react';
import logo from './images/logo.png';

applyPlugin(jsPDF);

export const Cart = ({ cart }) => {
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
      id: Date.now(),
      customerName,
      contactNumber,
      orderDate,
      deliveryDate: formattedDeliveryDate,
      items: orderDetails,
      total: cart.reduce((sum, item) => sum + item.price, 0),
    };

    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.getHeight();

    const logoHeight = pageHeight * 0.3;
    const logoWidth = 200;
    doc.addImage(logo, 'PNG', 5, 10, logoWidth, logoHeight);

    const addressStartY = 10 + logoHeight + 5;
    doc.setFontSize(12);
    doc.setTextColor('#5C4033');
    doc.setFillColor('#F5F5DC');
    doc.rect(10, addressStartY, 190, 20, 'F');
    doc.text('Pickup At: B/103, Gokul Divine, S. V. Road, Irla, Vile Parle (W), Mumbai- 400056', 15, addressStartY + 7);
    doc.text('Contact: Monica Makwana | +919892255987', 15, addressStartY + 15);

    let currentY = addressStartY + 30;
    doc.setFontSize(14);
    doc.text('Order Receipt', 15, currentY);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 15, currentY += 10);
    doc.text(`Customer Name: ${customerName}`, 15, currentY += 10);
    doc.text(`Contact Number: ${contactNumber}`, 15, currentY += 10);
    doc.text(`Order Date: ${orderDate}`, 15, currentY += 10);
    doc.text(`Delivery Date: ${formattedDeliveryDate}`, 15, currentY += 10);

    const tableData = orderDetails.map((item) => [
      item.name,
      item.weight,
      `₹${item.price}`,
    ]);

    doc.autoTable({
      head: [['Item Name', 'Weight', 'Price']],
      body: tableData,
      startY: currentY + 10,
      theme: 'grid',
      styles: { fillColor: '#F5F5DC', textColor: '#5C4033' },
    });

    doc.text(`Total: ₹${order.total}`, 15, doc.lastAutoTable.finalY + 10);
    doc.text('Thank you for your order!', 15, doc.lastAutoTable.finalY + 20);
    doc.text('Please pay via UPI on the following ID: monicasfoodstudio@okhdfcbank', 15, doc.lastAutoTable.finalY + 30);
    doc.text('Note: Custom orders need to be placed on call. All orders should be placed at least one day before the expected delivery date.', 15, doc.lastAutoTable.finalY + 40);
    doc.text('For any queries, please contact us at +919892255987.', 15, doc.lastAutoTable.finalY + 50);
    doc.text('Follow us on Instagram: @monicasfoodstudio', 15, doc.lastAutoTable.finalY + 60);

    doc.save(`Order_Receipt_${order.id}.pdf`);

    const emailParams = {
      order_id: order.id,
      customer_name: customerName,
      contact_number: contactNumber,
      order_date: orderDate,
      delivery_date: formattedDeliveryDate,
      items: orderDetails.map((item) => `- ${item.name} (${item.weight}): ₹${item.price}`).join('\n'),
      total: `₹${order.total}`,
    };

    try {
      await emailjs.send(
        'service_w96ibgj',
        'template_5h890qo',
        emailParams,
        'SBISX9vDC6D-LAaae'
      );
      alert('Order placed successfully! Receipt downloaded and email sent.');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    }

    const upiId = 'monicasfoodstudio@okhdfcbank';
    const upiUrl = `upi://pay?pa=${upiId}&pn=Bakery&mc=0000&tid=${order.id}&tr=${order.id}&tn=Order%20Payment&am=${order.total}&cu=INR`;

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Mobile device
      window.location.href = upiUrl;
    } else {
      // Desktop fallback
      alert(`If the UPI app doesn't open automatically, please use this link: ${upiUrl}`);
    }
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
          <p>Please pay via UPI on the following ID: monicasfoodstudio@okhdfcbank.</p>
        </div>
      )}
      {cart.length > 0 && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          onClick={handleConfirmOrder}
        >
          Proceed to Confirm Order
        </button>
      )}
    </div>
  );
};
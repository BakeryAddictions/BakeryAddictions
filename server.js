const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

// Endpoint to save orders
app.post('/api/orders', (req, res) => {
  const order = req.body;

  // Path to the orders.json file
  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

  // Read the existing orders from the file
  fs.readFile(ordersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading orders.json:', err);
      return res.status(500).send('Failed to save order');
    }

    let orders = [];
    try {
      orders = JSON.parse(data); // Parse the existing orders
    } catch (parseError) {
      console.error('Error parsing orders.json:', parseError);
    }

    // Add the new order to the list
    orders.push(order);

    // Write the updated orders back to the file
    fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to orders.json:', writeErr);
        return res.status(500).send('Failed to save order');
      }

      console.log('Order saved successfully:', order);
      res.status(201).send('Order saved successfully');
    });
  });
});

// Endpoint to send email notifications
app.post('/api/send-email', async (req, res) => {
  const { orderId, customerName, totalAmount } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'bakery-owner@gmail.com', // Replace with the recipient's email
    subject: `New Order Placed - Order ID: ${orderId}`,
    text: `A new order has been placed.\n\nCustomer Name: ${customerName}\nOrder ID: ${orderId}\nTotal Amount: ₹${totalAmount}\n\nPlease process the order.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Endpoint to display orders.json
app.get('/orders', (req, res) => {
  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

  fs.readFile(ordersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading orders.json:', err);
      return res.status(500).send('Failed to load orders');
    }

    try {
      const orders = JSON.parse(data); // Parse the JSON data
      res.status(200).json(orders); // Send the orders as JSON response
    } catch (parseError) {
      console.error('Error parsing orders.json:', parseError);
      res.status(500).send('Failed to parse orders');
    }
  });
});
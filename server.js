// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: './email.env' });

const app = express();
app.use(express.json());
app.use(cors());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', (req, res) => {
  const { customerName, contactNumber, orderDate, deliveryDate, items, total } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'monicasfoodstudio@gmail.com',
    subject: `New Order Placed - Order ID: ${req.body.id}`,
    text: `A new order has been placed.\n\nCustomer Name: ${customerName}\nContact Number: ${contactNumber}\nOrder Date: ${orderDate}\nDelivery Date: ${deliveryDate}\n\nItems:\n${items
      .map((item) => `- ${item.name} (${item.weight}): ₹${item.price}`)
      .join('\n')}\n\nTotal: ₹${total}\n\nPlease process the order.`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending test email:', err);
    } else {
      console.log('Test email sent successfully:', info.response);
    }
  });
});

// Endpoint to retrieve all orders
app.get('/orders', (req, res) => {
  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

  // Read the orders.json file
  fs.readFile(ordersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading orders.json:', err);
      return res.status(500).send('Failed to load orders');
    }

    try {
      const orders = JSON.parse(data);
      res.status(200).json(orders);
    } catch (parseError) {
      console.error('Error parsing orders.json:', parseError);
      res.status(500).send('Failed to parse orders');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
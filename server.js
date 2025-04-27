// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/orders', (req, res) => {
  const order = req.body;

  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

  fs.readFile(ordersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading orders.json:', err);
      return res.status(500).send('Failed to save order');
    }

    let orders = [];
    try {
      orders = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing orders.json:', parseError);
    }

    orders.push(order);

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

app.post('/api/update-orders', (req, res) => {
  const updatedOrders = req.body;

  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

  fs.writeFile(ordersFilePath, JSON.stringify(updatedOrders, null, 2), (err) => {
    if (err) {
      console.error('Error writing to orders.json:', err);
      return res.status(500).send('Failed to update orders');
    }

    console.log('Orders updated successfully');
    res.status(200).send('Orders updated successfully');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/orders', (req, res) => {
  const ordersFilePath = path.join(__dirname, 'src', 'orders.json');

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
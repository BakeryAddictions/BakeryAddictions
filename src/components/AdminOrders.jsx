import React, { useEffect, useState } from 'react';
import ordersData from '../data/orders.json'; // Adjust the path to your orders.json file

export const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from JSON file
    setOrders(ordersData);
  }, []);

  const handleOrderCompletion = async (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, completed: true } : order
    );
    setOrders(updatedOrders);

    // Update orders.json file
    try {
      await fetch('/src/data/orders.json', {
        method: 'POST', // Replace with PUT or PATCH if needed
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOrders, null, 2),
      });
    } catch (error) {
      console.error('Error updating orders.json:', error);
    }
  };

  const handleLogout = () => {
    console.log('Admin logged out');
    // Add logout logic here
  };

  return (
    <div className="admin-orders">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className={`order ${order.completed ? 'completed' : ''}`}>
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.total}</p>
              <p>Status: {order.completed ? 'Completed' : 'Pending'}</p>
              <label>
                <input
                  type="checkbox"
                  checked={order.completed}
                  onChange={() => handleOrderCompletion(order.id)}
                  disabled={order.completed}
                />
                Mark as Completed
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
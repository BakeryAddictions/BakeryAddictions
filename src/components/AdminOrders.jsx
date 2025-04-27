// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)

import React, { useEffect, useState } from 'react';
import ordersData from '../orders.json';

export const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleOrderCompletion = async (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, completed: true } : order
    );
    setOrders(updatedOrders);

    try {
      await fetch('/api/update-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOrders),
      });
      console.log('Orders updated successfully');
    } catch (error) {
      console.error('Error updating orders:', error);
    }
  };

  const handleLogout = () => {
    console.log('Admin logged out');
    window.location.href = '/monicasfoodstudio/adminlogin';
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
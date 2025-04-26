import React from 'react';

export const AdminOrders = ({ orders, onOrderCompletion, onLogout }) => {
  return (
    <div className="admin-orders">
      <h2>Admin Dashboard</h2>
      <button onClick={onLogout} className="logout-button">
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
              {!order.completed && (
                <button onClick={() => onOrderCompletion(order.id)}>Mark as Completed</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  // Fetch orders (dummy for now)
  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16 flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {/* Orders List */}
      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl w-full"
        >
          {/* Order Header */}
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col mb-4">
            <span>OrderID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total Amount: {currency}{order.amount}</span>
          </p>

          {/* Order Items */}
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-white text-gray-500/70 ${
                order.items.length !== idx + 1 ? 'border-b' : ''
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full`}
            >
              {/* Product Info */}
              <div className="flex items-center mb-4 md:mb-0 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-gray-800">
                    {item.product.name}
                  </h2>
                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              {/* Variants & Status */}
              <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0 gap-1">
                <p>Size: {item.size || 'N/A'}</p>
                <p>Color: {item.color || 'N/A'}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              {/* Item Amount */}
              <p className="text-primary text-lg font-medium">
                Amount: {currency}{item.product.offerPrice * (item.quantity || 1)}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
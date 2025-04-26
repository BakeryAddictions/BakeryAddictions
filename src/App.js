import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { BakeryMenu } from './components/BakeryMenu';
import { Cart } from './components/Cart';
import { ItemDetail } from './components/ItemDetail';
import { Payment } from './components/Payment';
import { Receipt } from './components/Receipt';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [viewCart, setViewCart] = useState(false);

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item); // Debugging log
    if (!item.name) {
      console.error("Item is missing a name:", item);
    }
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleProceedToPay = () => {
    setShowPayment(true);
  };

  const handleCategoryClick = (category) => {
    setShowPayment(false);
    setOrderDetails(null);
    setSelectedItem(null);
    setActiveCategory(category);
    setViewCart(false);
  };

  const handleViewCart = () => {
    setViewCart(true);
    setShowPayment(false);
    setSelectedItem(null);
    setActiveCategory(null);
  };

  return (
    <div className="min-h-screen bg-bakeryBlue text-bakeryGold">
      <nav className="p-4 bg-bakeryLilac shadow-md">
        <h1 className="text-3xl font-bold text-bakeryRed text-center">Bakery Addiction</h1>
        <div className="bubble-container">
          {[
            "ClassicCakes", "PremiumCakes", "TeaTimeCakes", "DarkChocolateCakes", "Cupcakes", "Brownies", "Blondies",
            "Cheesecakes", "Biscuits", "Breads", "Bons"
          ].map((category) => (
            <div
              key={category}
              className={`bubble cursor-pointer ${activeCategory === category ? "bg-activeCategory text-white" : "hover:bg-bakeryRed hover:text-white"
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
          <div
            className={`bubble cursor-pointer relative flex items-center justify-center ${viewCart ? "bg-activeCategory text-white" : "hover:bg-bakeryRed hover:text-white"
              }`}
            onClick={handleViewCart}
          >
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-bakeryRed text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>

        </div>
      </nav>

      <div className="p-6">
        {showPayment ? (
          orderDetails ? (
            <Receipt order={orderDetails} />
          ) : (
            <Payment cart={cart} onOrderConfirmed={setOrderDetails} />
          )
        ) : viewCart ? (
          <Cart cart={cart} onProceed={handleProceedToPay} />
        ) : selectedItem ? (
          <ItemDetail item={selectedItem} onAddToCart={handleAddToCart} />
        ) : activeCategory ? (
          <BakeryMenu
            selectedCategory={activeCategory}
            onSelectItem={setSelectedItem}
          />
        ) : (
          <AboutUs />
        )}
      </div>
    </div>
  );
}

export default App;
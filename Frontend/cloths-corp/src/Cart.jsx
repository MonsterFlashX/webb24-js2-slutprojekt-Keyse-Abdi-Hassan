import React, { useState } from 'react';
import './Cart.css'

function Cart({ cart, setCart, onRemove }) {
  const [message, setMessage] = useState('');

  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage('Your cart is empty!');
      return;
    }

    try {
      const response = await fetch("http://localhost:7000/api/orders/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for your purchase!");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      setMessage("Failed to process order. Please try again.");
    }
  };

  
    return (
        <>
        <h1>Cart</h1>
        <table className='table'>
          <thead>
            <tr className='even-rows'>
              <th className='th'>Id</th>
              <th className='th'>Name</th>
              <th className='th'>Item price</th>
              <th className='th'>Count</th>
              <th className='th'>Total Price</th>
              <th className='th'></th>
            </tr>
          </thead>   
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.name}</td>
                <td>{cartItem.itemPrice}$</td>
                <td>{cartItem.count}</td>
                <td>{cartItem.totalPrice}$</td>
                <td><button onClick={() => {
                  onRemove(cartItem)
                }}>Remove</button></td>
              </tr>
            ))}
          </tbody>       
        </table>
        <button onClick={handleCheckout}>Checkout</button>
        {message && <p>{message}</p>}
        </>
      );
    }

export default Cart;
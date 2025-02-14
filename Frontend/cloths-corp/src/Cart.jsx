import React, { useState } from 'react';
import './Cart.css'

function Cart(props) {
  const { cart, onRemove } = props;
  
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
        <button onClick={() => {
                  onAdd(cartItem)
                }}>Pay</button>
        </>
      );
    }

export default Cart;
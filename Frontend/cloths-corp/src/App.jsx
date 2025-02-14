import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Cart from './Cart'
import Products from './Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

  const getItemIndex = (cart, id) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
          return i;
        }
    }
    return -1;
  }

  const addToCart = (newProduct) => {
    let cartItem = {};
    let itemIndex = getItemIndex(cart, newProduct.id);

    if (itemIndex > -1) {
      let count = cart[itemIndex].count + 1;
      cartItem = {
        id: newProduct.id,
        name: newProduct.name,
        itemPrice: newProduct.price,
        count: count,
        totalPrice: newProduct.price * count,
      }
      let newCart = cart;
      newCart[itemIndex] = cartItem;
      setCart(newCart);
    } else {
      cartItem = {
        id: newProduct.id,
        name: newProduct.name,
        itemPrice: newProduct.price,
        count: 1,
        totalPrice: newProduct.price,
      }
      setCart([
        ...cart,
        cartItem,
      ]);
    }
  }

  const removeCartItem = (cartItem) => {
    let newCart = cart;
    newCart.pop(cartItem);
    setCart([...newCart]);
  }
  

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar  cart={cart}  />
          <Routes>
            <Route path="/" element={<Products cart={cart} onAddToCart={addToCart}/>} />
            <Route path="/products" element={<Products cart={cart} onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={removeCartItem}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

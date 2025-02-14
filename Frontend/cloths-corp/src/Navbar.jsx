import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const { cart, onAddToCart } = props;

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link> ({cart.length})
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
import React, { useState } from 'react';
import './Products.css'


const products = [
    {
        id: 1,
        name: 'Super T-Shirt',
        price: 99,
        image: 'tshirt.png',
        stock: 300
    },
    {
        id: 2,
        name: 'Durable Coffee Mug',
        price: 85,
        image: 'mug.webp',
        stock: 250
    },
    {
        id: 3,
        name: 'Wireless Earbuds',
        price: 149,
        image: 'earbuds.webp',
        stock: 100
    },
    {
        id: 4,
        name: 'Anodized Phone Case',
        price: 75,
        image: 'phonecase.webp',
        stock: 400
    },
    {
        id: 5,
        name: 'Premium Leather Jacket',
        price: 299,
        image: 'jacket.webp',
        stock: 60
    }
];

function Products(props) {
    const { cart, onAddToCart } = props;

    return (
        <>
            <h1>Products</h1>
            <main>
                {products.map((product) => (
                    <div key={product.id}
                        className="product">
                        <img src={'./src/assets/' + product.image}
                            width={200}
                            height={200} />
                        <h2>{product.name}</h2>
                        <h3>Price: {product.price}$</h3>
                        <p>stock: {product.stock}</p>
                        <button onClick={() =>
                            onAddToCart(product)
                        }>Add to cart</button>
                    </div>
                ))}
            </main>
        </>
    );
}

export default Products;
import React from 'react';

function ShoppingCart({ cart }) {
    return (
        <div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ShoppingCart;

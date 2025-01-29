import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div>
            {products.map((product, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    {product}{' '}
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

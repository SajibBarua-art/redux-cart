import React from 'react';

const Product = ({ product, addToCart }) => {
    const {name, id} = product;
    return (
        <div style={{border: '1px solid tomato', marginTop: '10px', padding: '5px'}}>
            <h4>{name}</h4>
            <button onClick={()=>addToCart(id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;
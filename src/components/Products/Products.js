import React from 'react';
import './Products.css';

const Products = (props) => {

  const {product, handleAddToCart} = props;
  const {name, img, price, seller, ratings} = product;

  return (
    <div className='product'>
      <div className="product-inner">
        <img src={img} alt="" />
        <div className="product-info">
          <h3>{name}</h3>
          <div className='price'>Price: ${price}</div>
          <div className='manufacturer'>Manufacturer: {seller}</div>
          <div className='rating'>Rating: {ratings}</div>
        </div>
      </div>
      <button onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
    </div>
  );
};

export default Products;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);

    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div id='shop'>
      <div className="shop-container">
        <div className='shop-product-container'>
          {
            products.map( product => <Products key={product.id} product={product} handleAddToCart={handleAddToCart}></Products>)
          }
        </div>
        <div className='shop-sidebar'>
          <div className='shop-sidebar-inner'>
            <h2 style={{textAlign: 'center'}}>Order Summary</h2>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
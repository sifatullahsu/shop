import React from 'react';

const Cart = (props) => {
  
  const {cart} = props;

  return (
    <div>
      <div>Selected Items: {cart.length}</div>
      <div>Total Price: </div>
      <div>Total Shipping Charge: </div>
      <div>Tax: </div>
      <div>Grand Total: </div>
      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};

export default Cart;
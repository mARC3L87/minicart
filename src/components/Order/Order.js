import React from 'react';

const Order = ({ currency, shipping }) => {
  return (
    <div className='total-container'>
      <div className='shipping'>
        <p>Shipping</p>
        <p>{`${currency} ${shipping}`}</p>
      </div>
      <div className='order-total'>
        <p>Order Total</p>
        <p>{currency}436.50</p>
      </div>
    </div>
  );
};

export default Order;
